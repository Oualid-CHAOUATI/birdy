import React, { useContext, useRef, useState } from "react";

import"./LinkAddForm.css"


import getLinkSVG from "../Link/other/getLinkSVG";
import { FormsContext } from "../../pages/mainPage";
import Field from "../field/Field";

const MAIN_CLASS="link-modify-form-wrapper"


function LinkAddForm() {
  let ctx = useContext(FormsContext);
  let input=useRef(null)


  const addLink=(e)=>{
    e.preventDefault();
    ctx.data_addLink(input.current.value)
    input.current.value = ""



  }
  return (
    <div className={MAIN_CLASS}>
     <form onSubmit={addLink} className="flex f-gap-1">

    <Field defaultValue={""} ref_={input}>{getLinkSVG()}</Field>
    <button className="btn">{"ajouter"}</button>
    </form>

    </div>
  )
}

export default LinkAddForm