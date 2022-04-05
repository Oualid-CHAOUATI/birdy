import React from "react";
import { FormsContext } from "./pages/mainPage";
import { useContext } from "react";

import "./navigationPannel.css";
import { NavLink } from "react-router-dom";
function NavigationPannel({ userID }) {
  let ctxValue = useContext(FormsContext);

  return (
    <nav className="main-nav ">
      <ul className="menu flex  f-gap-1">
        <NavLink to={`/profile/${userID}`}>profile</NavLink>
        <NavLink to={`/profile/${userID}/posts`}>posts</NavLink>
        <NavLink to={`/searchBar`}>searchbar</NavLink>
        <NavLink to={`/followers/${userID}`}>followers</NavLink>
        <NavLink to={`/followings/${userID}`}>followings</NavLink>
        <NavLink to={`/connectionForm`}>connection</NavLink>
        <NavLink to={`/inscriptionForm`}>inscription</NavLink>
        <NavLink to={`/linksEditForm`}>NavLinknksEditForm</NavLink>
      </ul>
    </nav>
  );
}

export default NavigationPannel;
