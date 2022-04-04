import React, { useCallback, useEffect, useState ,useRef} from "react";

import "./statutenligne.css";


const MAIN_CLASS="statut-enligne flex-center ";

const CHK_ID="enligne-chk"
function StatutEnligne() {
  return (
    <div className={MAIN_CLASS}>

      <input type="checkbox" id={CHK_ID} className="none"/>
      <label className="flex-center btn" htmlFor={CHK_ID}>Staut en ligne:

      <span className="input ib"></span>
      

      </label>

    </div>
  )
}

export default StatutEnligne