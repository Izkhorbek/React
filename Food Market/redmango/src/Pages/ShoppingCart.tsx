import React from "react";
import { CartPickupDetails, CartSummary } from "../Components/Cart";
import { WithAuth } from "../HOC";

function ShoppingCart() {
  return (
    <div className="row w-100" style={{ marginTop: "10px" }}>
      <div className="col-lg-6 col-12 " style={{ fontWeight: 300 }}>
        <CartSummary />
      </div>
      <div className="col-lg-6 col-12 p-4">
        <CartPickupDetails />
      </div>
    </div>
  );
}

export default WithAuth(ShoppingCart);
