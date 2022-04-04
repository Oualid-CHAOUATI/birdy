import React, { useCallback, useEffect, useState, useRef, useContext } from "react";
import { FormsContext } from "../../pages/mainPage";

import "./profileDescriptionBtns.css";

const MAIN_CLASS = "profile-btns btns-wrapper flex-center";

const RELATIONS={
  ME:"me",
  FOLLOWER:"followers",
  FOLLOWING:"following"
}
let findRelation=(userID)=>{
return RELATIONS.ME

}

function ProfileDescriptionBtns({
  userID,postsButtonNeeded=true
}) {

  let ctx=useContext(FormsContext)



  const gotoPostsPage=()=>{
    ctx.gotoPostsPage(userID);
  }
  let relation=findRelation(userID)
  let followBtnLabel = relation==RELATIONS.FOLLOWER ? "Unfollow" : "Follow";

  let postsNumber = 25;

  return (
    <div className={MAIN_CLASS}>
       {postsButtonNeeded&&  <button onClick={gotoPostsPage} className="posts btn flex-center">
        <span className="text">Posts</span>
        <span className="icon-wrapper">
          <span>{postsNumber}</span>
        </span>
      </button>}
       
     
     
      {!relation==RELATIONS.ME && (
        <button className={`${followBtnLabel} btn flex-center`}>
          {followBtnLabel}
        </button>
      )}
    </div>
  );
}

export default ProfileDescriptionBtns;
