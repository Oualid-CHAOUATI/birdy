import React, { createContext } from "react";
import NavigationPannel from "../navigationPannel";
import FormConnexion from "./components/FormConnexion/FormConnexion";
import FormInscription from "./components/FormInscription/FormInscription";
import LinkModifyForm from "./components/linkModifyForm/LinkModifyForm";
import LinksUpdateSection from "./components/LinksUpdateSection/LinksUpdateSection";
import PersonsList from "./components/PersonsList/PersonsList";
import ProfileDescription from "./components/ProfileDescription/ProfileDescription";
import ProfileDescriptionBtns from "./components/ProfileDescriptionBtns/ProfileDescriptionBtns";

export const FormsContext = createContext();

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.gotoConnectionPage = this.gotoConnectionPage.bind(this);
    this.gotoInscriptionPage = this.gotoInscriptionPage.bind(this);

    const { gotoConnectionPage,gotoInscriptionPage,gotoLinksEditPage,gotoProfilePage,gotoFollowersPage,gotoFollowingsPage } = this;
    const { gotoInscriptionPage } = this;
    this.ctxValue = {
      currentPage: "",
      isConnected: false,
      followers: [],
      followings: [],
      posts: [],
      ID: null,
      name: null,
      links: [],
      gotoInscriptionPage,
      gotoConnectionPage,
      gotoLinksEditPage,
      gotoProfilePage,
      gotoFollowersPage,
      gotoFollowingsPage
    };

  }

  gotoConnectionPage() {
    this.state.currentPage = <FormConnexion />;
    this.setState(this.state);
  }
  gotoInscriptionPage() {
    this.state.currentPage = <FormInscription />;
    this.setState(this.state);
  }
 gotoLinksEditPage(){
     this.state.currentPage = <div>
         <LinkModifyForm/>
         <LinksUpdateSection/>
     </div>
    this.setState(this.state);

 }
 gotoProfilePage(ID){

    this.state.currentPage = <div>
        <ProfileDescription  />
        <ProfileDescriptionBtns userID={ID}/>
    </div>

    this.setState(this.state);
 }

 gotoFollowersPage(ID){
    this.state.currentPage =<PersonsList list={this.state.followers}/>
    this.setState(this.state);



 }
 gotoFollowingsPage(ID){
    this.state.currentPage =<PersonsList list={this.state.followings}/>
    this.setState(this.state);
 }
  render() {
            const ctxValue=this.ctxValue
            return(
    <FormsContext.Provider value = {ctxValue}>
            <NavigationPannel />
              
    </FormsContext.Provider>
            )
  }
}
export default MainPage;
