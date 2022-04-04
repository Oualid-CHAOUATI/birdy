import React, { useCallback, useEffect, useState ,useRef} from "react";
import ImgWrapper from "../ImgWrapper/ImgWrapper";

import "./relations.css";


const MAIN_CLASS="relations flex-center center-text"


function Relations({followers=902,followings=102}) {


  let followersImgs=[`https://images.pexels.com/photos/2262810/pexels-photo-2262810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
  `https://images.pexels.com/photos/2262810/pexels-photo-2262810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
  `https://images.pexels.com/photos/2262810/pexels-photo-2262810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`];
  let followingsImgs=[`https://images.pexels.com/photos/2262810/pexels-photo-2262810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
  `https://images.pexels.com/photos/2262810/pexels-photo-2262810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
  `https://images.pexels.com/photos/2262810/pexels-photo-2262810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`];

  let followerssImgsUI=arrToUi(followersImgs);
  let followingssImgsUI=arrToUi(followingsImgs);

  function arrToUi(arr){
    return arr.map(imgSrc=>
    
      //taile définie dans le css
      <ImgWrapper overflow="visible" imgSrc={imgSrc}/>

  );

  }
  
  return (
    <div className={MAIN_CLASS}>

<div class="col">
<p>
  following
  <div className="numbers">+{followings}</div>
</p>
<div className="imgs-wrapper flex-center">
{followingssImgsUI}

</div>

</div>

<div class="col"> 

<p>
  followers
  <div className="numbers">+{followers}</div>
</p>
<div className="imgs-wrapper flex-center">

{followerssImgsUI}
</div>


</div>

    </div>
  )
}

export default Relations