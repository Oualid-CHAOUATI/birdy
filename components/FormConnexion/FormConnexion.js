import React from "react";
import { useContext } from "react";
import { FormsContext } from "../../pages/mainPage";

import Form from "../form/Form";

const array = [
  { label: "login", errorMessage: "incorrect login", required: true },
  { label: "password", errorMessage: "incorrect password", required: true },
];
const TITLE = "Contents de vous retrouver!";
const FORM_IMG_URL="https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"

function FormConnexion() {
  let ctxValue = useContext(FormsContext);
 

  const btnsObj = {
    main: {
      label: "Se connecter",
      clickHandler: () => {},
    },
    secondary: {
      label: "creer un compte",
      clickHandler: ctxValue.gotoInscriptionPage,
      extraInfo: "Vous n'etes pas déja inscrit",
    },
  };
  return <Form title={TITLE} array={array} btnsObj={btnsObj}  imgUrl={FORM_IMG_URL}/>;
}

export default FormConnexion;
