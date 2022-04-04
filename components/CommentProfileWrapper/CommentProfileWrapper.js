import React from 'react'
import ImgWrapper from '../ImgWrapper/ImgWrapper'
import "./CommentProfileWrapper.css"



function CommentProfileWrapper({profileImgSrc,profilName,date}) {
  return (
    <div className="header flex">

       <ImgWrapper imgSrc={profileImgSrc}/>
       <div className="header-text ">

      
       <p className="comment-date">
           <span className="label">posté le :</span>
            {date}</p>
            <div className="profile-name">{profilName}</div>

       </div>
   </div>
  )
}

export default CommentProfileWrapper