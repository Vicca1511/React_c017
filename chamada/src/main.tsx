import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./global-styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
