import React from "react";
import ReactDOM from "react-dom/client";
import App, { Header, Footer, Menu } from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <App />
      <Header />
      <Menu />
      <Footer />
    </>
  </React.StrictMode>
);
