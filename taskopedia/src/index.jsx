import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import MainBody from "./MainBody";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className ="" style={{background: "black", color:"grey"}}>
    <Header />
    <b />
    <div className="px-4">
    <MainBody />
    </div>
    <Footer />
  </div>
);

