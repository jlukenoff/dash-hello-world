import { createRoot } from "react-dom/client";
import React from "react";
import App from "./components/App";

window.ReactDOM.render(
  React.createElement(App, {}),
  document.getElementById("root") as HTMLElement
);
