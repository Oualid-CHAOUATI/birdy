import React, { useCallback, useEffect, useState ,useRef, useContext} from "react";
import { FormsContext } from "../../pages/mainPage";
import LinkInInput from "../Link/LinkInInput";

import "./LinkUpdate.css";



const MAIN_CLASS="social-link-update"

function LinkUpdate(props) {

  let ctxValue=useContext(FormsContext);
 
  const linkInput=useRef(null)
  // const removeLink=ctxValue.re




  const resetLinkValue=useCallback(
    () => {
      linkInput.current.value=props.href;
      
    },
    [props.href],
  )
  
  const removeLink=useCallback(
    () => {
     ctxValue.data_removeLink(props.href)
    },
    [props.href],
  )
  return (
   <div className={MAIN_CLASS}>

   <div className="btns-wrapper flex">
     <button className="btn suppr" onClick={removeLink}>Supprimer</button>
     <button className="btn reset" onClick={resetLinkValue}>Reset</button>
   </div>
   <LinkInInput ref_={linkInput} {...props} />
   </div> )
}

export default LinkUpdate