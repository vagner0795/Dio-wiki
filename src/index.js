import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles";

import App from "../src/pages/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
