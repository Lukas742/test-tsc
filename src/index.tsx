import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "@ui5/webcomponents-react/dist/Assets.js";
import * as ReactDOMClient from "react-dom/client";
import { ThemeProvider } from "@ui5/webcomponents-react";

import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
