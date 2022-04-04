import React, { useCallback, useEffect, useState, useContext } from "react";

import "./BtnWithIcon.css";

const Main_class="btn btn-with-icon flex-center"

function BtnWithIcon({label,svg,number=0,className}) {
  
  return (
    <div className={`${className} ${Main_class}`} >
      <span className="text">{label}</span>

      <span className="icon-wrapper" dangerouslySetInnerHTML={svg}/>



<span className={`stats-wrapper `}>{number}</span>
    </div>
  )
}

export default BtnWithIcon
