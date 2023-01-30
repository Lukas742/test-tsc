import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "@ui5/webcomponents-react/dist/Assets.js";
import { StrictMode } from "react";
import { render } from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");

render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
