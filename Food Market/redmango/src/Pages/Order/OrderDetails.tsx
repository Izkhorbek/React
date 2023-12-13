import React from "react";
import { OrderSummary } from "../../Components/Layout/Page/Order";
import { useParams } from "react-router-dom";
import { useGetOrderDetailsQuery } from "../../Apis/orderApi";

function OrderDetails() {
  const { id } = useParams();
  const { data, isLoading } = useGetOrderDetailsQuery(id);
  let userInput, OrderDetails;

  if (!isLoading && data?.result) {
    OrderDetails = {
      id: data?.result[0].orderHeaderId,
      cartItems: data?.result[0].orderDetails,
      cartTotal: data?.result[0].orderTotal,
      userId: data?.result[0].applicationUserId,
      status: data?.result[0].status,
    };
    userInput = {
      name: data.result[0].pickupName,
      email: data?.result[0].pickupEmail,
      phoneNumber: data?.result[0].pickupPhoneNumber,
    };
  }
  return (
    <div
      className="container my-5 mx-auto p-5 w-100"
      style={{ maxWidth: "750px" }}
    >
      {!isLoading && OrderDetails && userInput && (
        <div>
          <OrderSummary
            data={OrderDetails}
            userInput={userInput}
          ></OrderSummary>
        </div>
      )}
    </div>
  );
}

export default OrderDetails;
