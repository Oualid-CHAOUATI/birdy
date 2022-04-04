import React, { useCallback, useEffect, useState ,useRef} from "react";

import "./Link.css";
import getLinkSVG from "./other/getLinkSVG";



const MAIN_CLASS="social-link-wrapper flex al-center"


function Link({href,inNewTAB=true}) {
  let target=inNewTAB?"_blank":"";
  return (
    <a className={MAIN_CLASS} href={href} target={target}>

      <div className="icon-wrapper"  dangerouslySetInnerHTML={getLinkSVG()}/>
      <div className="link-content">{href}</div>

    </a>
  )
}

export default Link