import React, { useEffect, useRef } from "react";

import"./ImgWrapper.css"
let STYLE="";

let addVar=(element,varName,varValue)=>{
    STYLE+=`--${varName}:${varValue};`


    element.style.setProperty(`--${varName}`,varValue);
}
let check=(element,varName,varValue)=>{
    if(varValue!=undefined)
    addVar(element,varName,varValue);

}

function ImgWrapper({ imgSrc, size, radius, className ,overflow=false}) {
  className=className||"";
    let div= useRef(null);
    
    useEffect(() => {
        
        let element=div.current;
        check(element,"size",size);
        check(element,"radius",radius);});
  
        if(overflow==false)className+=" overflow-hide"
  return (
    <div ref={div}
      className={`img-wrapper  ${className}`}
    //   style={STYLE}
  
    >
      <img src={imgSrc} />
    </div>
  );
}

export default ImgWrapper;
