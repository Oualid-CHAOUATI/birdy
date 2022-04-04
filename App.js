import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/mainPage";
import React from "react";


const list = [
  {
    name: "eve",
    imgSrc: `https://images.pexels.com/photos/11574219/pexels-photo-11574219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
  },
  {
    name: "john",
    imgSrc: `https://images.pexels.com/photos/3831760/pexels-photo-3831760.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
  },
  {
    name: "billy",
    imgSrc: `https://images.pexels.com/photos/10861561/pexels-photo-10861561.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
  },
  {
    name: "drey",
    imgSrc: `https://images.pexels.com/photos/10530102/pexels-photo-10530102.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
  },
];
function App() {
  return (
    <React.Fragment>
      <MainPage></MainPage>

   
     

 
    </React.Fragment>
  );
}

export default App;
