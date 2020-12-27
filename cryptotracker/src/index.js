import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import Info from "./Info";
import Why from "./Why";

ReactDOM.render(
  <div>
    <App />
    <Info />
    <Why />
  </div>,
  document.getElementById("root")
);
