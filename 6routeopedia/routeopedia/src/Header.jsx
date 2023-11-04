import React from "react";
import logo from "../src/images/react.png";
import { NavLink } from "react-router-dom";
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
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-danger" : "nav-link"
                  }
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-danger" : "nav-link"
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-danger" : "nav-link"
                  }
                  to="/cryptodetail/mk/35"
                >
                  Crypto Detail
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/product">
                      Product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/product/list">
                      Product List
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/product/create">
                      Create Product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/product/details">
                      Product Details
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link disabled" aria-disabled="true">
                  Disabled
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
