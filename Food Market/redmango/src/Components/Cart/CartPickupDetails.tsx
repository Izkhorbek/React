import React, { useEffect, useState } from "react";
import { apiResponse, cardItemModel, userModel } from "../../Interface";
import { useSelector } from "react-redux";
import { RootState } from "../../Storage/Redux/store";
import { inputHelper } from "../../Helper";
import { MiniLoader } from "../Layout/Page/Common";
import { useNavigate } from "react-router-dom";
import { useInitialPaymentMutation } from "../../Apis/paymentApi";

function CartPickupDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [initialPayment] = useInitialPaymentMutation();
  const navigate = useNavigate();
  const userData: userModel = useSelector(
    (state: RootState) => state.userAuthStore
  );

  const shoppingCartFromStore: cardItemModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cardItems ?? []
  );

  let grandTotal = 0;
  let numberOfItems = 0;

  const initialUserData = {
    name: userData.fullName,
    email: userData.email,
    phoneNumber: "",
  };

  const [userInput, setUserInput] = useState(() => initialUserData);
  useEffect(() => {
    setUserInput({
      name: userData.fullName,
      email: userData.email,
      phoneNumber: "",
    });
  }, [userData]);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempData = inputHelper(e, userInput);

    setUserInput(tempData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const { data }: apiResponse = await initialPayment(userData.id);
    navigate("/payment", {
      state: { apiResult: data?.result, userInput },
    });

    setIsLoading(false);
  };

  shoppingCartFromStore?.map((item: cardItemModel) => {
    grandTotal += item.menuItem?.price! * (item.quantity ?? 0);
    numberOfItems += item.quantity ?? 0;
    return null;
  });
  return (
    <div className="border pb-5 pt-2">
      <h1 style={{ fontWeight: "300" }} className="text-center text-success">
        Pickup Details
      </h1>
      <hr />
      <form onSubmit={handleSubmit} className="col-10 mx-auto">
        <div className="form-group mt-3">
          <label htmlFor="name">Pickup Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={userInput.name}
            onChange={handleUserInput}
            placeholder="name..."
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="email">Email</label> <br />
          <input
            className="form-control"
            type="email"
            placeholder="email..."
            value={userInput.email}
            onChange={handleUserInput}
            name="email"
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="phoneNumber">Phone Number</label> <br />
          <input
            className="form-control"
            type="tel"
            placeholder="phone number..."
            value={userInput.phoneNumber}
            onChange={handleUserInput}
            name="phoneNumber"
            required
          />
        </div>
        <div className="form-group mt-3">
          <div className="card p-3" style={{ background: "ghostwhile" }}>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
            <h5>Num of items: {numberOfItems}</h5>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-success form-control mt-3"
          disabled={isLoading}
        >
          {isLoading ? <MiniLoader /> : "Looks Good? Place Order!"}
        </button>
      </form>
    </div>
  );
}

export default CartPickupDetails;
