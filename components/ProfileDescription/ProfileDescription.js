import React, { useCallback, useEffect, useState ,useRef} from "react";

import "./profileDescription.css";
import createSettingsSVG from "./other/settingsIcon";
import { useParams } from "react-router-dom";

const PROFILE_CLASS = "profile-description flex-center f-wrap x-margin-auto ";
const IMG_WRAPPER_CLASS = "img-wrapper";
const PROFILE_IMG =
  "https://images.pexels.com/photos/2262810/pexels-photo-2262810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

  const BG_IMG=` https://images.pexels.com/photos/1510659/pexels-photo-1510659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`


  const NAME="EMMA"
  const ID="EMMA_99"
  const DESCRIPTION=`Hey You, welcome to my profile,I’m a UX/UX designer , I love design , music and workout <3 lorem ipsum dulur lorem ipsum dulur lorem ipsum dulur lorem ipsum dulur lorem ipsum dulur lorem ipsum dulur lorem ipsum dulur lorem ipsum dulur lorem ipsum dulurlorem ipsum dulurlorem ipsum dulurlorem ipsum dulur lorem ipsum dulur lorem ipsum dulur lorem ipsum dulur lorem ipsum dulur `;

const READMORE_LESS_CLASS="read-more btn"

const SHOWMORELABEL="show more";
const SHOWLESSLABEL="show less";

const PARTIALLY_FILL="partially";
const COMPLETELY_FILL="completetly";

function getMinContent({DOMElement,maxSize,content}){


if(maxSize<0){
  DOMElement.innerText=content;
  return true;
}


  let index=0;
  let totallyFilled=false;
  let contentLength=content.length
  DOMElement.innerHTML="";

while(DOMElement.offsetHeight<=maxSize){
    if(index>=contentLength){
      totallyFilled=true;
      break;
    };
    DOMElement.innerText+=content[index];
    index++;
}


console.table(totallyFilled,index);
return totallyFilled;

}

function ProfileDescription({name=NAME,userID,description=DESCRIPTION,imgSrc}) {

  const params=useParams();
  console.log('====================================');
  console.log( params);
  console.log('====================================');


  // const [imgSrc, setImgSrc] = useState("");

  // const getImgSrc = useCallback(() => {
  //   setImgSrc(PROFILE_IMG);
  // }, []);

  // useEffect(() => {
  //   getImgSrc();
  // });

  const textSpan= useRef(null);

  const [showMoreLessLabel,setShowMoreLessLabel]=useState("show more");
  const [isShowMoreLessBtnNeeded,setIsShowMoreLessBtnNeeded]=useState(true);
  const [descriptionMode,setDescriptionMode]=useState(PARTIALLY_FILL);

  const partiallyFillDescription=useCallback(() =>{
      const MAXSIZE=90;
      const btnWidth=15;
      let DOMElement=textSpan.current;

      let totallyFilled=getMinContent({DOMElement,maxSize:MAXSIZE,content:description});

      let lastIndex=DOMElement.innerText.length;
    let content;
      if(totallyFilled){
        
        content=description;
      setIsShowMoreLessBtnNeeded(false);
    }
    else{
      content=description.split("").slice(0,lastIndex-3-btnWidth).join("");
      content+="..."
      setIsShowMoreLessBtnNeeded(true);
      setShowMoreLessLabel(SHOWMORELABEL);
    }

    
      DOMElement.innerText=content;


  } )
const switchTextDivMode=useCallback(() =>{

  if(descriptionMode==PARTIALLY_FILL)

  setDescriptionMode(COMPLETELY_FILL);

  else setDescriptionMode(PARTIALLY_FILL);
})

const completelyFillDescription=useCallback(() =>{

  // textSpan.innerHTML=DESCRIPTION+"</br>";
  textSpan.current.innerText=description;
  setShowMoreLessLabel(SHOWLESSLABEL);
  setIsShowMoreLessBtnNeeded(true);

} )


const fillDescription=useCallback(
  () => {
    if(descriptionMode==PARTIALLY_FILL)partiallyFillDescription();
  
  else{
    completelyFillDescription();
  }
}
,[descriptionMode]
)

 


  useEffect(() =>{
    //  switchTextDivMode();

      // partiallyFillDescription();
      fillDescription();


  } )


  return (
    <div className={PROFILE_CLASS}  >
<div className="settings-icon-wrapper btn" dangerouslySetInnerHTML={createSettingsSVG()} /> 

        <div className="bg">
            <img src={BG_IMG}/>
        </div>

      <div className={IMG_WRAPPER_CLASS}>
        <img src={imgSrc} />
      </div>
      <div className="infos">
        <p className="id">{ID}</p>
        <p className="name">{name}</p>
        <p className="name-effect">{name}</p>

        <p className="description text" >
            <span ref={textSpan}>
            </span>

            {isShowMoreLessBtnNeeded &&  <button onClick={switchTextDivMode}  className={READMORE_LESS_CLASS}>
              {showMoreLessLabel}
              </button>}
        </p>
      
      </div>
    </div>
  );
}

export default ProfileDescription;
