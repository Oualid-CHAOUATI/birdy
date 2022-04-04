import React, { useCallback, useEffect, useState, useContext } from "react";
import { FormsContext } from "../../pages/mainPage";
import Field from "../field/Field";
import "./form.css";

const FORM_WRAPPER_CLASS = "form-wrapper flex-center ";
const FORM_CLASS = "form iflex f-column";
const FORM_SIDE_CLASS = "form-side";
const SIDE_SECONDARY_BTN_WRAPPER_CLASS =
  "secondary-btn-wrapper flex-center f-wrap  ";
const FORM_SECONDARY_BTN_WRAPPER_CLASS =
  "secondary-btn-wrapper flex-center f-wrap  ";
const TITLE_CLASS = "title";

function Form({ array = [], title, id, btnsObj, imgUrl }) {
  let ctx = useContext(FormsContext);

  const [fields, setFields] = useState([]);

  useEffect(() => {
    let tmpFields = array.map((item) => {
      return (
        <Field id={id} type={item.type} errorMessage={item.errorMessage}>
          {item.label}
        </Field>
      );
    });

    setFields(tmpFields);
  }, [array]);


  const mainBtnObj = btnsObj.main;
  const secondaryBtnObj = btnsObj.secondary;

  const secondaryBtnWrapperContent = (
    <>
      
      <p className="question  txt">{secondaryBtnObj.extraInfo}</p>
<button onClick={secondaryBtnObj.clickHandler} className="btn" type="button">
  {secondaryBtnObj.label}
</button>


    </>
  );

  return (
    <div className={FORM_WRAPPER_CLASS}>

      <div className="form-content overflow-hide flex">


      <form className={FORM_CLASS}>
        <h2 className={TITLE_CLASS}>{title}</h2>

        <div className="secondary-btn-wrapper none ">
          {secondaryBtnWrapperContent}
        </div>
        {fields}

        <div className="main-btn-wrapper"> 
         {/* buttonn de soumission  */}
          <button className="btn" onClick={mainBtnObj.clickHandler} type="button">
            {mainBtnObj.label}
          </button>
        </div>
      </form>

      <div className={` ${FORM_SIDE_CLASS} flex-center`}>
        <img src={imgUrl} />

        <div className={`${SIDE_SECONDARY_BTN_WRAPPER_CLASS} f-column`}>
          {secondaryBtnWrapperContent}
        </div>
      </div>
      </div>


    </div>
  );
}

export default Form;
