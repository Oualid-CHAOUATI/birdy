import React, { useCallback, useEffect, useState, useRef ,useContext} from "react";
import Link from "../Link/Link";
import getSVG from "./other/getSVG";

import "./LinksSection.css";
import { FormsContext } from "../../pages/mainPage";

function LinksSection({ allowEdit = false ,links=[]}) {

  let ctx=useContext(FormsContext)

  const gotoLinksEditPage=()=>{
    ctx.gotoLinksEditPage()
  }
  //  let linksUI=links.map(link=><SocialLink href={link}/>)
  let linksUI = links.map((link) => <Link href={link} />);
  return (
    <div className={"social-links-wrapper   flex f-column"}>
      <h2 className="title flex-center">
        <span >Links</span>
      </h2>

    {allowEdit && <button className="link-style btn flex-center" onClick={gotoLinksEditPage}>
      <span className="text">
      Edit links

      </span>
    <span dangerouslySetInnerHTML={getSVG()} className="icon-wrapper"/>
    </button>}

    <div className="social-links-content flex f-column">
      {linksUI}

    </div>
    </div>
  );
}

export default LinksSection;
