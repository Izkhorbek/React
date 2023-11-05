import React from "react";
import logo from "../../images/react.png";

function Header() {
  return (
    <div style={{ fontSize: "30px", color: "red" }}>
      <img src={logo} alt="" style={{ height: "35px", width: "top" }}></img>
      <span>React Course - Redux Opedia</span>
    </div>
  );
}

export default Header;
