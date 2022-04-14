import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
// import Popper from "popper.js";

ReactDOM.render(
  //React.StrictMode removed as it would render twice in dev mode.
  <>
    <App />
  </>,
  document.getElementById("root")
);
