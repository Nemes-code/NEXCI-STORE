import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./stylesheeet.css"; // Make sure to import your stylesheet here

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
