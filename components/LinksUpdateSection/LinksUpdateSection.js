import React, { useCallback, useEffect, useState, useRef } from "react";
import Link from "../Link/Link";
import LinkUpdate from "../LinkUpdate/LinkUpdate";

import "./LinksUpdateSection.css";

function LinksUpdateSection({links=[]}) {


  let linksUI=links.map(link=>{
   return <LinkUpdate href={link}/>

  })
  return (
    <div className="flex f-column f-inverse">
    
   {linksUI}
    
    </div>
  )
}

export default LinksUpdateSection