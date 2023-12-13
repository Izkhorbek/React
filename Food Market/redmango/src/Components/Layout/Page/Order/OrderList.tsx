import React from "react";
import { MainLoader } from "../Common";
import { orderResultModel } from "../../../../Interface";
import OrderListProps from "./orderListType";
import { useNavigate } from "react-router-dom";
import { getStatusColor } from "../../../../Helper";
function OrderList({ isLoading, orderData }: OrderListProps) {
  const navigate = useNavigate();

  return (
    <>
      {" "}
      <div className="table p-5">
        <h2 className="text-success">Orders List</h2>
        {isLoading && <MainLoader />}
        <div className="p-2">
          <div className="row border">
            <div className="col-1">ID</div>
            <div className="col-2">Name</div>
            <div className="col-2">Phone</div>
            <div className="col-1">Total</div>
            <div className="col-1">Items</div>
            <div className="col-2">Date</div>
            <div className="col-1">Status</div>
            <div className="col-2"></div>
          </div>
          {!isLoading &&
            orderData.map((item: orderResultModel, index: number) => {
              return (
                <div className="row border" key={item.orderHeaderId}>
                  <div className="col-1">{item.orderHeaderId}</div>
                  <div className="col-2">{item.pickupName}</div>
                  <div className="col-2">{item.pickupPhoneNumber}</div>
                  <div className="col-1">${item.orderTotal!.toFixed(2)}</div>
                  <div className="col-1">#{item.totalItems}</div>
                  <div className="col-2 ">
                    {new Date(item.orderDate!).toLocaleDateString()}
                  </div>
                  <div className="col-1">
                    <span
                      className={`badge rounded-pill text-bg-${getStatusColor(
                        item.status!
                      )}`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div className="col-2">
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        navigate(`/order/orderdetails/${item.orderHeaderId}`)
                      }
                    >
                      Details
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default OrderList;
