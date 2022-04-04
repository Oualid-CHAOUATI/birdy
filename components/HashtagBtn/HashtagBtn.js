import React, { useCallback } from 'react'
import "./HashtagBtn.css"

function HashtagBtn({label,onClick}) {

  const removeHashtag=()=>{
    onClick(label)
  }
  
  return (
    <div className="hastag-btn-wrapper">
      <span>

{label}
      </span>
<button  className="btn" onClick={removeHashtag}>x</button>

    </div>
  )
}

export default HashtagBtn