import React, { useState } from "react";
import "./field.css";

const FIELD_WRAPPER_CLASS = "field-wrapper flex f-column f-inverse";
const LABEL_CLASS = "ib";
const ERROR_CLASS="error-message"

function Field({ children ,type="text",errorMessage,required=false,id,defaultValue="",ref_}) {
  if(typeof children==='string'){
    children ={ __html:children}
  }

    const [error,setError]=useState(false);
  return (
    <div className={`${FIELD_WRAPPER_CLASS} ${error&&ERROR_CLASS}` }>
    <input type={type || "text"} required={required} id={type+id} name={type+"_name"+id} defaultValue={defaultValue} ref={ref_}/>
      <label htmlFor={type+id}  className={LABEL_CLASS} dangerouslySetInnerHTML={children}/>



{error && <p className={ERROR_CLASS}>{errorMessage}</p>}
{/* {error && <p className={ERROR_CLASS}>{"errooooooooooor    "}</p>} */}

    </div>
  );
}

export default Field;
