import React, { useCallback, useEffect, useState, useContext } from "react";
import BtnWithIcon from "../BtnWithIcon/BtnWithIcon";
import "./CommentBtn.css";
import getCommentSVG from "./other/getCommentSVG";



function CommentBtn(props) {
  return (
    <BtnWithIcon  {...props}label="Comment" svg={getCommentSVG()} number="0"/>
  )
}

export default CommentBtn