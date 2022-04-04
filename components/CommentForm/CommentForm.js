import React from 'react'
import CommentProfileWrapper from '../CommentProfileWrapper/CommentProfileWrapper';


import "./CommentForm.css"

const MAIN_CLASS="comment-form comment-wrapper";
function CommentForm() {
  return (
    <div className={MAIN_CLASS}>
        <CommentProfileWrapper date={"--"}
        profilName="WALID"
        profileImgSrc={`https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}

        />



<form className="comment-content-wrapper" onSubmit={()=>{}}>


      



        <textarea className="text-area comment-content" placeholder="Type your comment here"/>

        <div className="btns-wrapper flex">

          <button className="btn submit">Poster</button>
          <input className="img-btn btn" type="file" />
         
          
        </div>

</form>



    </div>
  )
}

export default CommentForm