import React from 'react'

import PersonCard from '../PersonCard/PersonCard';


import "./PersonsList.css"


const MAIN_CLASS="persons-list  ";

function PersonsList({list,title}) {


    let listUI=list.map(item=>{

        return <PersonCard name={item.name} imgSrc={item.imgSrc} userID={item.userID}/>

    })



  return (
    <div className={MAIN_CLASS}>

<h4 className="title center-text">{title}</h4>

<div className="cards-wrapper flex-center f-wrap f-gap-2">


    {listUI}
</div>



    </div>
  )
}

export default PersonsList