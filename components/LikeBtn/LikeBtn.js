import React, { useCallback, useEffect, useState, useContext } from "react";

import "./LikeBtn.css";

import BtnWithIcon from "../BtnWithIcon/BtnWithIcon";

import getLikeSVG from "./other/getLikeSVG";


function LikeBtn(props) {
  return (
   <BtnWithIcon {...props} label="like" svg={getLikeSVG()} number="0"/>
  )
}

export default LikeBtn