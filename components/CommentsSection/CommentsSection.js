import React from "react";
import CommentsWrapper from "../CommentsWrapper/CommentsWrapper";


import "./CommentsSection.css";

const MAIN_CLASS = "comments-section ";



function CommentsSection() {
  return (
    <div className={`${MAIN_CLASS}`}>
      <h3 className="title">
        <span className="text ib">
        COMMENTAIRES
        
          </span>
        
        </h3>

        <CommentsWrapper/>

            </div>
  )
}

export default CommentsSection