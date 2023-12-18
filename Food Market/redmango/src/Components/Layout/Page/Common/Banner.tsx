import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./banner.css";
import { setSearchItem } from "../../../../Storage/Redux/menuItemSlice";
function Banner() {
  const [searchElement, setSearchElement] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(setSearchItem(e.target.value));
    setSearchElement(e.target.value);
  };
  return (
    <div className="custom-banner">
      <div
        className="m-auto d-flex align-items-center"
        style={{ width: "500px", height: "50vh" }}
      >
        <div className="d-flex align-items-center" style={{ width: "100%" }}>
          <input
            type="text"
            className="form-control rounded-pill"
            style={{ width: "100%", padding: "20px 20px" }}
            placeholder="Search for Food Items"
            value={searchElement}
            onChange={handleChange}
          ></input>
          <span style={{ position: "relative", left: "-43px" }}>
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
