import React from "react";
import ReactDOM from "react-dom/client";
import App, { Pizza, Header, Footer } from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <Pizza />
    {/* To reuse the component, it is just enough to copy and paste the compnent Pizza several times! */}
    <Pizza />
    <Pizza />
    <Footer />
  </React.StrictMode>
);
