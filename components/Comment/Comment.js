import React from 'react'
import CommentProfileWrapper from '../CommentProfileWrapper/CommentProfileWrapper';

import"./Comment.css";
const  MAIN_CLASS="comment-wrapper"
function Comment({profileImgSrc,profilName="Zilan",content,imgSrc,date="1/2/2022"}) {
  return (
    <div className={MAIN_CLASS}>
       
       <CommentProfileWrapper profilName={profilName} profileImgSrc={profileImgSrc} date={date}/>

<div className="comment-content-wrapper">

<div className="comment-content flex f-column f-gap-1">

<p className='text'>
    {content}
</p>

       {imgSrc&&<div className="img-wrapper">
           <img src={imgSrc}/></div>}
           </div>
</div>





    </div>
  )
}

export default Comment