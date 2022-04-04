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
import { BrowserRouter,Route, Routes } from "react-router-dom";

export const FormsContext = createContext();



const PAGE_POSTS="pge psts"
const PAGE_CONNECTION="pge cnction"
const PAGE_INSCRIPTION="pge inscription"
const PAGE_LINKSEDIT="pge lnk edit"
const PAGE_PROFILE="pge prfl"
const PAGE_FOLLOWERS="pge fflwsrrprfl"
const PAGE_FOLLOWINGS="pge fflwsgssrrprfl"
const PAGE_SEARCHBAR="pge search"


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {currentPage:<ProfileDescription/>};
    this.bindMethods();

    const {
      gotoPostsPage,
      gotoConnectionPage,
      gotoInscriptionPage,
      gotoLinksEditPage,
      gotoProfilePage,
      gotoFollowersPage,
      gotoFollowingsPage,
      gotoSearchBar,
      data_removeLink,
      data_addLink,
      data_updateLink

    } = this;
    this.ctxValue = {

     data_removeLink,
     data_addLink,
     data_updateLink
,
    
      gotoInscriptionPage,
      gotoConnectionPage,
      gotoLinksEditPage,
      gotoProfilePage,
      gotoFollowersPage,
      gotoFollowingsPage,
      gotoPostsPage,
      gotoSearchBar
    };

    this.state = {
      userInfo:{
        ID:0,
        imgSrc:`https://images.pexels.com/photos/11554404/pexels-photo-11554404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
        description:"hello its me",
       isConnected: false,


      },
      currentPage: "",
      currentPagelabel: "",
      followers: [new Person(1, "leila").getInfosForPersonsList(),new Person(1, "lilo").getInfosForPersonsList()],
      followings: [new Person(1, "laila").getInfosForPersonsList(),new Person(1, "laila").getInfosForPersonsList()],
      posts: [],
      userID: 1,
      showNotification: false,
      notificationMessage:"",
      links: ["face", "insta", "linked.fgfg"],
    };
    // this.ctxValue.gotoProfilePage(this.ctxValue.userID);
    this.gotoSearchBar()
  }

  bindMethods() {
    this.gotoConnectionPage = this.gotoConnectionPage.bind(this);
    this.gotoInscriptionPage = this.gotoInscriptionPage.bind(this);
    this.gotoLinksEditPage = this.gotoLinksEditPage.bind(this);
    this.gotoProfilePage = this.gotoProfilePage.bind(this);
    this.gotoFollowersPage = this.gotoFollowersPage.bind(this);
    this.gotoFollowingsPage = this.gotoFollowingsPage.bind(this);
    this.gotoPostsPage = this.gotoPostsPage.bind(this);
    this.gotoSearchBar = this.gotoSearchBar.bind(this);
    this.data_addLink=this.data_addLink.bind(this)
    this.data_removeLink=this.data_removeLink.bind(this)
    this.data_updateLink=this.data_updateLink.bind(this)
    
  }

  getLinkss(){
    return this.state.links;
  }
  data_removeLink(link) {
   
    link=link.trim();
    if(link=="")return;
    
    let index=this.state.links.indexOf(link);
   
    if(index<0)return;

    this.state.links.splice(index,1);

    this.state.links=[...this.state.links];
    this.gotoCurrentPage()
  }

  data_addLink(link) {

    link=link.trim();
    if(link=="")return;

    let index=this.state.links.indexOf(link);
    if(index>0)return;

    this.state.links.push(link);
    this.gotoCurrentPage()
  }
  data_updateLink(linkValue,newLinkValue){
 
    
    newLinkValue=newLinkValue.trim();
    if(newLinkValue=="")return;
    if(newLinkValue==linkValue)return;
    
    let index=this.state.links.indexOf(linkValue);
    if(index<0)return;

    this.state.links[index]=newLinkValue;
    // this.state.links=[...this.state.links]

    
    this.showNotification("link updated succesfully")
    this.hideNotification(500);
    

this.gotoCurrentPage()

  }

 
  gotoSearchBar(){
    this.state.currentPage = <SearchBar />;
    // this.state.currentPagelabel = PAGE

    this.saveState()
  }
  gotoCurrentPage(){
    switch(this.state.currentPagelabel){
    
    case PAGE_CONNECTION:this.gotoConnectionPage();break;
    case PAGE_INSCRIPTION:this.gotoInscriptionPage();break;
    case PAGE_FOLLOWERS:this.gotoFollowersPage();break;
    case PAGE_FOLLOWINGS:this.gotoFollowingsPage();break;
    case PAGE_LINKSEDIT:this.gotoLinksEditPage();break;
    case PAGE_POSTS:this.gotoPostsPage();break;
    case PAGE_PROFILE:this.gotoProfilePage();break;
    
    
    
    
    }
      }
  saveState(){
    this.setState(this.state);
  }
  gotoConnectionPage() {
    this.state.currentPage = <FormConnexion />;
    this.state.currentPagelabel=PAGE_CONNECTION;
    this.saveState()

  }
  gotoInscriptionPage() {
    this.state.currentPage = <FormInscription/>;
    this.state.currentPagelabel=PAGE_INSCRIPTION;
    this.saveState()
  }
  gotoLinksEditPage() {
    this.state.currentPage = (
      <div>
        <LinkModifyForm />
        <LinksUpdateSection links={this.state.links} />
      </div>
    );
    this.state.currentPagelabel=PAGE_LINKSEDIT


    this.saveState()
  }
  gotoProfilePage(ID = this.state.userInfo.ID) {
    let IAmTheUser = ID == this.state.userInfo.ID;
    let imgSrc = IAmTheUser
      ? this.state.userInfo.imgSrc
      : "https://images.pexels.com/photos/7452049/pexels-photo-7452049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    this.state.currentPage = (
      <div>
        <ProfileDescription imgSrc={imgSrc} />
        <ProfileDescriptionBtns userID={ID} />
        {IAmTheUser && (
          <LinksSection allowEdit={IAmTheUser} links={this.state.links} />
        )}
      </div>
    );

    this.state.currentPagelabel=PAGE_PROFILE

    this.saveState()
    return this.state.currentPage;

  }
  gotoPostsPage(userID = this.state.userID) {
    let IAmTheUser = userID == this.state.userID;

    let imgSrc =
      IAmTheUser? this.state.imgSrc
        : "https://images.pexels.com/photos/7452049/pexels-photo-7452049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

  
    this.state.currentPage = (
      <div>
        <ProfileDescription imgSrc={imgSrc} />
        <ProfileDescriptionBtns userID={userID} postsButtonNeeded={false} />
        {IAmTheUser && <PostForm imgSrc={imgSrc} userID={userID} />}
        {/* <PostForm /> */}
        <PostsWrapper />
      </div>
    );
    this.state.currentPagelabel=PAGE_POSTS
    this.saveState()

  }

  gotoFollowersPage(ID) {
    this.state.currentPage = (
      <PersonsList list={this.state.followers} title="Followers" />
    );
    this.saveState()

  }
  gotoFollowingsPage(ID) {
    this.state.currentPage = (
      <PersonsList list={this.state.followings} title="Followings" />
    );
    this.saveState()
 
  }
  showNotification(msg){
    this.state.notificationMessage=msg;
    this.state.showNotification=true;
    this.saveState()

    
  }
  hideNotification(time=700){
    setTimeout(()=>{
      this.state.showNotification=false;
      this.saveState()


    },time)


  }
  render() {
    const ctxValue = this.ctxValue;
    return (

      <BrowserRouter>
      <FormsContext.Provider value={ctxValue}>

        <div className={`notification flex-center `+(!this.state.showNotification&&" hide "||"")}>{this.state.notificationMessage}</div>
        <NavigationPannel userID={this.ctxValue.userID} />


<div className="container-max-width x-margin-auto">

<Routes>


<Route path="/profile" element={<>

<div>
        <ProfileDescription imgSrc={this.state.imgSrc} />
        <ProfileDescriptionBtns userID={this.state.ID} />
          <LinksSection allowEdit={true} links={this.state.links} />
      </div>

</>


}/>
<Route path="/formConnexion"/>



</Routes>


</div>
       
      </FormsContext.Provider>
      </BrowserRouter>
    );
  }
}
export default MainPage;
