import React, { useState } from "react";
import { OrderSummaryProps } from "./OrderSummaryProps";
import { cardItemModel } from "../../../../Interface";
import { getStatusColor } from "../../../../Helper";
import { useNavigate } from "react-router-dom";
import { SD_Rules, SD_Status } from "../../../../Utility/SD";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Storage/Redux/store";
import { useUpdateOrderHeaderMutation } from "../../../../Apis/orderApi";

function OrderSummary({ data, userInput }: OrderSummaryProps) {
  const badgeTypeColor = getStatusColor(data.status!);
  const navigate = useNavigate();
  const [isLoading, SetLoading] = useState(false);
  const [updateOrderHeader] = useUpdateOrderHeaderMutation();
  const userData = useSelector((state: RootState) => state.userAuthStore);

  const nextStatus: any =
    data.status! === SD_Status.CONFIRMED
      ? { color: "info", value: SD_Status.BEING_COOKED }
      : data.status! === SD_Status.BEING_COOKED
      ? { color: "warning", value: SD_Status.READY_FOR_PICKUP }
      : data.status! === SD_Status.READY_FOR_PICKUP && {
          color: "success",
          value: SD_Status.COMPLETED,
        };
  const handleNextStatus = async () => {
    SetLoading(true);
    await updateOrderHeader({
      orderHeaderId: data.id,
      status: nextStatus.value,
    });
    SetLoading(false);
  };
  const handleCancle = async () => {
    SetLoading(true);
    await updateOrderHeader({
      orderHeaderId: data.id,
      status: SD_Status.CANCELLED,
    });
    SetLoading(false);
  };

  return (
    <div>
      {" "}
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="text-success">Order Summary</h3>
        <span className={`btn btn-outline-${badgeTypeColor} fs-6`}>
          {data.status}
        </span>
      </div>
      <div className="mt-3">
        <div className="border py-3 px-2">Name : {userInput.name} </div>
        <div className="border py-3 px-2">Email : {userInput.email} </div>
        <div className="border py-3 px-2">Phone : {userInput.phoneNumber}</div>
        <div className="border py-3 px-2">
          <h4 className="text-success">Menu Items</h4>
          <div className="p-3">
            {data.cartItems?.map((cardItem: cardItemModel, index: number) => {
              return (
                <div className="d-flex" key={index}>
                  <div className="d-flex w-100 justify-content-between">
                    <p>{cardItem.menuItem?.name}</p>
                    <p>
                      ${cardItem.menuItem?.price} x {cardItem.quantity} =
                    </p>
                  </div>
                  <p style={{ width: "70px", textAlign: "right" }}>
                    ${cardItem.menuItem?.price! * cardItem.quantity!}
                  </p>
                </div>
              );
            })}
            <hr />
            <h4 className="text-danger" style={{ textAlign: "right" }}>
              ${data.cartTotal}
            </h4>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Back to Orders
        </button>
        {userData.role === SD_Rules.ADMIN && (
          <div className="d-flex">
            {data.status! !== SD_Status.CANCELLED &&
              data.status! !== SD_Status.COMPLETED && (
                <button className="btn btn-danger mx-2" onClick={handleCancle}>
                  Cancel
                </button>
              )}
            <button
              className={`btn btn-${nextStatus.color}`}
              onClick={handleNextStatus}
            >
              {nextStatus.value}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderSummary;
