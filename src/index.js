import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import Main from "./components/main/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
