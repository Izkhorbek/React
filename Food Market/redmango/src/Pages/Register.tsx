import React, { useState } from "react";
import { SD_Rules } from "../Utility/SD";
import { inputHelper, toastNotify } from "../Helper";
import { useRegisterUserMutation } from "../Apis/authApi";
import { apiResponse } from "../Interface";
import { useNavigate } from "react-router-dom";
import { MainLoader, MiniLoader } from "../Components/Layout/Page/Common";
function Register() {
  const [registerUser] = useRegisterUserMutation();
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    userName: "",
    name: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();
  const handleUserInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const tempData = inputHelper(e, userInput);
    setUserInput(tempData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const response: apiResponse = await registerUser({
      userName: userInput.userName,
      name: userInput.name,
      password: userInput.password,
      role: userInput.role,
    });

    if (response.data) {
      toastNotify("Registeration successful!.Please login to continue.");
      navigate("/login");
    } else if (response.error) {
      toastNotify(response.error.data.errorMessages[0], "error");
    }
    setLoading(false);
  };
  return (
    <div className=" container text-center">
      {loading && <MainLoader />}
      <form method="post" onSubmit={handleSubmit}>
        <h1 className=" mt-5">Register</h1>
        <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
          <input
            type="text"
            name="userName"
            value={userInput.userName}
            onChange={handleUserInput}
            className="form-control"
            placeholder="Enter Username"
            required
          />
        </div>
        <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
          <input
            type="text"
            name="name"
            value={userInput.name}
            onChange={handleUserInput}
            className="form-control"
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
          <input
            type="password"
            name="password"
            value={userInput.password}
            onChange={handleUserInput}
            className="form-control"
            placeholder="Enter Password"
            required
          />
        </div>
        <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
          <select
            className="form-control form-select"
            name="role"
            onChange={handleUserInput}
            value={userInput.role}
            required
          >
            <option value="">{"--Select Role--"}</option>
            <option value={`${SD_Rules.CUSTOMER}`}>Customer</option>
            <option value={`${SD_Rules.ADMIN}`}>Admin</option>
          </select>
        </div>

        <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
          <button
            className="btn btn-success text-white text-center"
            disabled={loading}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
