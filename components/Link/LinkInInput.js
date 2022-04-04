import React, { useCallback, useEffect, useState ,useRef, useContext} from "react";
import { FormsContext } from "../../pages/mainPage";

import "./Link.css";
import getLinkSVG from "./other/getLinkSVG";



const MAIN_CLASS="social-link-wrapper flex-center f-wrap f-gap-0p5"


function LinkInInput({href,inNewTAB=true,ref_}) {

  let ctx=useContext(FormsContext);
  let target=inNewTAB?"_blank":"";
  let input=ref_;



  const updateLink=(e)=>{
    e.preventDefault();
    let v=input.current.value;
    ctx.data_updateLink(href,v);


  }
  return (
    <form className={MAIN_CLASS} onSubmit={updateLink}>

<div className="flex-center f-grow-1">

      <div className="icon-wrapper "  dangerouslySetInnerHTML={getLinkSVG()}/>
     <input type="text"  className="link-in-input f-grow-1" defaultValue={href} ref={ref_}/>

</div>
<button className="link-validate-btn btn" >Valider</button>
    </form>
  )
}

export default LinkInInput