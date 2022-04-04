import React from 'react';
import { FormsContext } from './pages/mainPage';
import { useContext } from "react";

import"./navigationPannel.css"
import { NavLink } from 'react-router-dom';
function NavigationPannel ({userID}){
    let ctxValue = useContext(FormsContext);




    const gotoFollowersPage=()=>{
        ctxValue.gotoFollowersPage(userID)
    }
  
    const gotoFollowingsPage=()=>{
        ctxValue.gotoFollowingsPage(userID)
    }
  
    const gotoProfilePage=()=>{
        ctxValue.gotoProfilePage(userID)
    }
  
    const gotoPostsPage=()=>{
        ctxValue.gotoPostsPage(userID)
    }
  
    const gotoConnectionPage=()=>{
        ctxValue.gotoConnectionPage()
    }
  
    const gotoInscriptionPage=()=>{
        ctxValue.gotoInscriptionPage()
    }
  
    const gotoLinksEditPage=()=>{
        ctxValue.gotoLinksEditPage()
    }
  
    const gotoSearchBar=()=>{
        ctxValue.gotoSearchBar()
    }
  
    
    return <nav className="main-nav ">

        <ul className="menu flex ">
            <li onClick={gotoFollowersPage}>Followers</li>
            <li onClick={gotoFollowingsPage}>Followings</li>
            <li onClick={gotoProfilePage}>Profile</li>
<NavLink to="/profile">
    profile
</NavLink>

            <li onClick={gotoPostsPage}>Posts</li>
            <li onClick={gotoConnectionPage}>connexion</li>
            <li onClick={gotoInscriptionPage}>inscription</li>
            <li onClick={gotoLinksEditPage}>LinksEdit</li>
            <li onClick={gotoSearchBar}>Search</li>
        </ul>
     
    </nav>


}

export default NavigationPannel;
