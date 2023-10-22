import React from "react";
import logo from "../src/images/React.png"

export default function Header() {
    return (
      <div className="py-2  pl-2" style={{ borderBottom: "1px solid #ff0000" }}>
        <img src={logo} style={{ height: "35px", verticalAlign: "top" }} />
        <span className="h2 pt-4 m-2 text-white-50">
          React Course - WatchOpedia
        </span>
      </div>
    );
  }