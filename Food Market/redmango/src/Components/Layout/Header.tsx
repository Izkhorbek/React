import { NavLink } from "react-router-dom";
import { cardItemModel } from "../../Interface";
import { useSelector } from "react-redux";
import { RootState } from "../../Storage/Redux/store";

let logo = require("../../Assets/Images/Taomlar.png");

function Header() {
  const shoppingCartFromStore: cardItemModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cardItems ?? []
  );

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <NavLink className="nav-link" aria-current="page" to="/">
          <img
            src={logo}
            alt=""
            className=""
            style={{ height: "40px", verticalAlign: "top" }}
          />
        </NavLink>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent ">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/shoppingCart"
              >
                <i className="bi bi-cart3"></i>{" "}
                {shoppingCartFromStore?.length
                  ? `(${shoppingCartFromStore.length})`
                  : ""}
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#section"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admin Panel
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="#section">
                    Action
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#section">
                    Another action
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#section">
                    Something else here
                  </NavLink>
                </li>
              </ul>
            </li>
            <div className="d-flex" style={{ marginLeft: "auto" }}>
              <li className="nav-item">
                <button
                  className="btn btn-success btn-outlined rounded-pill text-white mx-2"
                  style={{ border: "none", height: "40px", width: "100px" }}
                >
                  Logout
                </button>
              </li>
              <li className="nav-item text-white">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="btn btn-success btn-outlined rounded-pill text-white mx-2"
                  style={{ border: "none", height: "40px", width: "100px" }}
                  aria-current="page"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
