import React from "react";
import { useParams } from "react-router-dom";
let confirmedImage = require("../../Assets/Images/Mainwindow.jpg");
function OrderConfirmed() {
  const { id } = useParams();
  return (
    <div className="w-100  text-center d-flex justify-content-center align-items-center">
      <div>
        <i
          className="bi bi-check2-circle text-success"
          style={{ fontSize: "7em" }}
        ></i>
        <div className="pb-5">
          <h2 className="text-success">Order has been Confirmed!</h2>
          <h5 className="mt-3">Your order ID : {id}</h5>
          <p>We will soon start to cook the delicious food you ordered</p>
        </div>
        <img
          src={confirmedImage}
          alt=""
          style={{ width: "50%", borderRadius: "30px" }}
        />
      </div>
    </div>
  );
}

export default OrderConfirmed;
