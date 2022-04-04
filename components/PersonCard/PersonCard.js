import React from 'react'
import ImgWrapper from '../ImgWrapper/ImgWrapper'


import "./PersonCard.css"


const MAIN_CLASS="person-card flex"
function PersonCard({name,imgSrc,userID}) {



  return (
    <div className={MAIN_CLASS}>
        

        <ImgWrapper imgSrc={imgSrc} size={"120px"}/>
       
        <div className="side iflex-center f-column">
            <h3 className="name">
                {name}
            </h3>

            <button className="btn  follow-unfollow">
                unfollow
            </button>
            <button className="btn visit-profile">
                view profile
            </button>
        </div>
        
        </div>
  )
}

export default PersonCard