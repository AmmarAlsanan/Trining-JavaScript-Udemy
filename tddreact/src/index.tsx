import React,{StrictMode} from "react";
import  ReactDOM  from "react-dom";
import {App} from "./App";
import reportWebVitals from './reportWebVitals';

const index =()=>{

  ReactDOM.render(
  <StrictMode>
    <App/>
  </StrictMode>,
document.getElementById('root'));
};

index();
reportWebVitals();
