import React, { createContext } from "react";
import NavigationPannel from "../navigationPannel";
import LinkModifyForm from "../components/LinkAddForm/LinkAddForm";
import LinksUpdateSection from "../components/LinksUpdateSection/LinksUpdateSection";
import PersonsList from "../components/PersonsList/PersonsList";
import ProfileDescription from "../components/ProfileDescription/ProfileDescription";
import ProfileDescriptionBtns from "../components/ProfileDescriptionBtns/ProfileDescriptionBtns";
import Person from "../data/Person";
import PostForm from "../components/formPost/PostForm";
import PostsWrapper from "../components/PostsWrapper/PostsWrapper";
import LinksSection from "../components/LinksSection/LinksSection";
import FormConnexion from "../components/FormConnexion/FormConnexion";
import FormInscription from "../components/FormInscription/FormInscription";
import SearchBar from "../components/SearchBar/SearchBar";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

export const FormsContext = createContext();

const PAGE_POSTS = "pge psts";
const PAGE_CONNECTION = "pge cnction";
const PAGE_INSCRIPTION = "pge inscription";
const PAGE_LINKSEDIT = "pge lnk edit";
const PAGE_PROFILE = "pge prfl";
const PAGE_FOLLOWERS = "pge fflwsrrprfl";
const PAGE_FOLLOWINGS = "pge fflwsgssrrprfl";
const PAGE_SEARCHBAR = "pge search";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.bindMethods();

    const {
      data_removeLink,
      data_addLink,
      data_updateLink,
    } = this;
    this.ctxValue = {
      data_removeLink,
      data_addLink,
      data_updateLink,
    };

    this.state = {
      userInfo: {
        ID: 0,
        imgSrc: `https://images.pexels.com/photos/11554404/pexels-photo-11554404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
        description: "hello its me",
        isConnected: false,
      },
      currentPage: "",
      currentPagelabel: "",
      followers: [
        new Person(1, "leila").getInfosForPersonsList(),
        new Person(1, "lilo").getInfosForPersonsList(),
      ],
      followings: [
        new Person(1, "laila").getInfosForPersonsList(),
        new Person(1, "laila").getInfosForPersonsList(),
      ],
      posts: [],
      userID: 1,
      showNotification: false,
      notificationMessage: "",
      links: ["face", "insta", "linked.fgfg"],
    };
  }

  bindMethods() {
  
    this.data_addLink = this.data_addLink.bind(this);
    this.data_removeLink = this.data_removeLink.bind(this);
    this.data_updateLink = this.data_updateLink.bind(this);
  }

  getLinkss() {
    return this.state.links;
  }
  data_removeLink(link) {
    link = link.trim();
    if (link == "") return;

    let index = this.state.links.indexOf(link);

    if (index < 0) return;

    this.state.links.splice(index, 1);

    this.state.links = [...this.state.links];
    this.saveState();
  }

  data_addLink(link) {
    link = link.trim();
    if (link == "") return;

    let index = this.state.links.indexOf(link);
    if (index > 0) return;

    this.state.links.push(link);
    this.saveState();
  }
  data_updateLink(linkValue, newLinkValue) {
    newLinkValue = newLinkValue.trim();
    if (newLinkValue == "") return;
    if (newLinkValue == linkValue) return;

    let index = this.state.links.indexOf(linkValue);
    if (index < 0) return;

    this.state.links[index] = newLinkValue;

    this.showNotification("link updated succesfully");
    this.hideNotification(500);
    this.saveState()

  }


  
  saveState() {
    this.setState(this.state);
  }



  showNotification(msg) {
    this.state.notificationMessage = msg;
    this.state.showNotification = true;
    this.saveState();
  }
  hideNotification(time = 700) {
    setTimeout(() => {
      this.state.showNotification = false;
      this.saveState();
    }, time);
  }
  render() {
    const ctxValue = this.ctxValue;
    return (
      <BrowserRouter>
        <FormsContext.Provider value={ctxValue}>
          <div
            className={
              `notification flex-center ` +
              ((!this.state.showNotification && " hide ") || "")
            }
          >
            {this.state.notificationMessage}
          </div>
          <NavigationPannel userID={this.state.userInfo.ID} />

          <div className="container-max-width x-margin-auto">
            <Routes>
              <Route
                path="/profile/:id"
                element={(() => {
                  // let {id}=useParams();
                  let id=0;
                  let IAmTheUser = id == this.state.userInfo.ID;
                  let imgSrc = IAmTheUser
                    ? this.state.userInfo.imgSrc
                    : "https://images.pexels.com/photos/7452049/pexels-photo-7452049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
                  return (
                    <div>
                      <ProfileDescription imgSrc={imgSrc} />
                      <ProfileDescriptionBtns userID={id} />
                      {IAmTheUser && (
                        <LinksSection
                          allowEdit={IAmTheUser}
                          links={this.state.links}
                        />
                      )}
                    </div>
                  );
                })()}
              />
              <Route path="/" element={<ProfileDescription/>}/>
              
              <Route
                path="/profile/:id/posts"
                element={(() => {
                  // let {id}=useParams();
                  let id=0;
                  let IAmTheUser = id == this.state.userInfo.ID;

                  let imgSrc = IAmTheUser
                    ? this.state.userInfo.imgSrc
                    : "https://images.pexels.com/photos/7452049/pexels-photo-7452049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
                  return (
                    <div>
                      <ProfileDescription imgSrc={imgSrc} />
                      <ProfileDescriptionBtns
                        userID={id}
                        postsButtonNeeded={false}
                      />
                      {IAmTheUser && (
                        <PostForm imgSrc={imgSrc} userID={id} />
                      )}
                      <PostsWrapper />
                    </div>
                  );
                })()}
              />

              <Route path="/searchBar" element={<SearchBar />} />
              <Route
                path="/followers/:id"
                element={
                  <PersonsList list={this.state.followers} title="Followers" />
                }
              />
              <Route
                path="/followings/:id"
                element={
                  <PersonsList
                    list={this.state.followings}
                    title="Followings"
                  />
                }
              />
              <Route path="/connectionForm" element={<FormConnexion />} />
              <Route path="/inscriptionForm" element={<FormInscription />}/>
              <Route
                path="/linksEditForm"
                element={
                  <>
                    <div>
                      <LinkModifyForm />
                      <LinksUpdateSection links={this.state.links} />
                    </div>
                  </>
                }
              />
            </Routes>
          </div>
        </FormsContext.Provider>
      </BrowserRouter>
    );
  }
}
export default MainPage;
