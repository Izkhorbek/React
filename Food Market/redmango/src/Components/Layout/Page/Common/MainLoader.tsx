import React from "react";

function MainLoader() {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="spinner-border text-warning"
        style={{ scale: "100%" }}
      ></div>
    </div>
  );
}

export default MainLoader;
