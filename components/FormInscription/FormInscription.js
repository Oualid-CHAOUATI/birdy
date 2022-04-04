import React, { useContext } from "react";
import { FormsContext } from "../../pages/mainPage";

import Form from "../form/Form";



const array=[
  {
    label: "Email",
    type: "email",
    errorMessage: "incorrect login",
    required: true,
  },
  { label: "Nom", errorMessage: "incorrect nom", required: true },
  { label: "prenom", errorMessage: "incorrect prenom", required: true },
  ,
  {
    label: "Date de naissance",
    type: "date",
    errorMessage: "incorrect date",
    required: true,
  },
  {
    label: "password",
    type: "password",
    errorMessage: "incorrect password",
    required: true,
  },
];
const TITLE="Créer un nouveau compte"
const FORM_IMG_URL="https://media.istockphoto.com/photos/how-millennials-spend-their-chill-time-online-picture-id869274262?k=20&m=869274262&s=612x612&w=0&h=D2dOtax7h8InKcCk_0K3OdNtBS47D85S84O0ZT8zWOo=";

function FormInscription() {

  const ctxValue=useContext(FormsContext);
  

  const btnsObj={
    main:{
      label:"Valider",
      clickHandler:ctxValue.gotoConnectionPage

    },
    secondary:{
      label:"connecte toi",
      clickHandler:ctxValue.gotoConnectionPage,
      extraInfo:'vous avez déjà un compte'

    }
  }

  return (
    <Form
      title={TITLE}
      array={array}
      btnsObj={btnsObj}
      imgUrl={FORM_IMG_URL}
    />
  );
}

export default FormInscription;
