import React from "react";
import logo from "../src/images/react.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <img
            src={logo}
            alt=""
            style={{ height: "35px", verticalAlign: "top" }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cryptodetail">
                  Crypto Detail
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/product">
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/productlist">
                      Product List
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/createproduct">
                      Create Product
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/productdetails">
                      Product Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true">
                  Disabled
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
