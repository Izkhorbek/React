import React from "react";
import logo from "../images/react.png";
function Header() {
  return (
    <div className="pt-3 pl-2">
      <img
        src={logo}
        alt=""
        style={{ height: "35px", verticalAlign: "top" }}
      ></img>{" "}
      <span className="pt-4 h2">React Course - TravelOpedia</span>
    </div>
  );
}

export default Header;
