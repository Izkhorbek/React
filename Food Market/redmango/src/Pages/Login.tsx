import React, { useState } from "react";
import { inputHelper } from "../Helper";
import { useLoginUserMutation } from "../Apis/authApi";
import { apiResponse, userModel } from "../Interface";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { setLoggedInUser } from "../Storage/Redux/userAuthSlice";
import { logDOM } from "@testing-library/react";
import { MainLoader } from "../Components/Layout/Page/Common";
import { useNavigate } from "react-router-dom";
function Login() {
  const [loginUser] = useLoginUserMutation();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    userName: "",
    password: "",
  });

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempData = inputHelper(e, userInput);
    setUserInput(tempData);
  };

  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const response: apiResponse = await loginUser({
      userName: userInput.userName,
      password: userInput.password,
    });

    if (response.data) {
      console.log(response.data);
      setErrorMessage("");
      const { token } = response.data.result;
      localStorage.setItem("token", token);
      const { fullName, id, email, role }: userModel = jwtDecode(token);
      dispatch(setLoggedInUser({ fullName, id, email, role }));
      navigate("/");
    } else if (response.error) {
      console.log(response.error.data.errorMessages[0]);
      setErrorMessage(response.error.data.errorMessages[0]);
    }
    setLoading(false);
  };
  return (
    <div className="container text-center">
      {loading && <MainLoader />}
      <form method="post" onSubmit={handleSubmitLogin}>
        <h1>Login</h1>
        <div className="col-sm-6 offset-3 col-xs-12 mt-4">
          <input
            type="text"
            placeholder="Enter Username"
            className="form-control"
            name="userName"
            value={userInput.userName}
            onChange={handleUserInput}
            required
          ></input>
        </div>
        <div className="col-sm-6 offset-3 col-xs-12 mt-4">
          <input
            type="password"
            placeholder="Enter Password"
            className="form-control"
            name="password"
            value={userInput.password}
            onChange={handleUserInput}
            required
          ></input>
        </div>
        <div className="col-sm-6 offset-3 col-xs-12 mt-4">
          <button className="col-sm-4 btn btn-success text-center text-white">
            Login
          </button>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
}

export default Login;
