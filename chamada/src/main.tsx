import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./Login";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./global-styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/pages/login/Login";
import Classroom from "./components/pages/classroom/classroom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>

        <Route path="/" element = {<Login />}/> 
        <Route path="/classroom" element = {<Classroom />}/> 
      </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
