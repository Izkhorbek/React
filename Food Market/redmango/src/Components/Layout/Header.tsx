import { NavLink, useNavigate } from "react-router-dom";
import { cardItemModel, userModel } from "../../Interface";
import { useSelector } from "react-redux";
import { RootState } from "../../Storage/Redux/store";
import { useDispatch } from "react-redux";
import {
  emptyUserState,
  setLoggedInUser,
} from "../../Storage/Redux/userAuthSlice";
import { SD_Rules } from "../../Utility/SD";
let logo = require("../../Assets/Images/Taomlar.png");

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const shoppingCartFromStore: cardItemModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cardItems ?? []
  );

  const userLogged: userModel = useSelector(
    (state: RootState) => state.userAuthStore ?? null
  );

  const handleLogut = () => {
    localStorage.removeItem("token");
    dispatch(setLoggedInUser({ ...emptyUserState }));
    navigate("/");
  };
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

            {userLogged.role === SD_Rules.ADMIN ? (
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
                <ul className="dropdown-menu" style={{ cursor: "pointer" }}>
                  <li
                    className="dropdown-item"
                    onClick={() => navigate("/order/myorders")}
                  >
                    My Orders
                  </li>
                  <li
                    className="dropdown-item"
                    onClick={() => navigate("/order/allorders")}
                  >
                    All Orders
                  </li>
                  <li>
                    <a className="dropdown-item" href="#section">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/order/myorders"
                >
                  Orders
                </NavLink>
              </li>
            )}

            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/shoppingCart"
              >
                <i className="bi bi-cart3"></i>{" "}
                {userLogged.id && `(${shoppingCartFromStore.length})`}
              </NavLink>
            </li>
            <div className="d-flex" style={{ marginLeft: "auto" }}>
              {userLogged.id && (
                <>
                  <li className="nav-item">
                    <button
                      className="nav-link active"
                      style={{
                        cursor: "pointer",
                        background: "transparent",
                        border: 0,
                      }}
                    >
                      Welcome, {userLogged.fullName}
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-success btn-outlined rounded-pill text-white mx-2"
                      style={{ border: "none", height: "40px", width: "100px" }}
                      onClick={handleLogut}
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
              {!userLogged.id && (
                <>
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
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
