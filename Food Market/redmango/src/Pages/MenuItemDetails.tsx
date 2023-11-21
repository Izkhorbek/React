import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUpdateShoppingCartMutation } from "../Apis/shoppingCartApi";
import { MainLoader, MiniLoader } from "../Components/Layout/Page/Common";
import { useGetMenuItembyIdQuery } from "../Apis/menuItemApi";

// USER ID "f9d964e8-bff1-4851-92b7-389c8415d4ff"
function MenuItemDetails() {
  const { menuItemId } = useParams();
  const { data, isLoading } = useGetMenuItembyIdQuery(menuItemId);
  const [menuItemCount, setMenuItemCount] = useState(1);
  const navigate = useNavigate();
  const [isAddingtoCart, setIsAddingToCart] = useState(false);
  const [updateShoppingCart] = useUpdateShoppingCartMutation();

  if (isLoading) {
    return <MainLoader />;
  }

  const handleMenuItemCounter = (counter: number) => {
    const newCounter = menuItemCount + counter;
    if (newCounter > 0) setMenuItemCount(newCounter);
    return;
  };

  const handleAddToCart = async (menuItemId: number) => {
    setIsAddingToCart(true);
    await updateShoppingCart({
      menuItemId: menuItemId,
      updateQuantityBy: menuItemCount,
      userId: "f9d964e8-bff1-4851-92b7-389c8415d4ff",
    });

    setIsAddingToCart(false);
  };

  return (
    <div className="container pt-4 pt-md-5">
      <div className="row">
        <div className="col-7">
          <h2 className="text-success">{data.result?.name}</h2>
          <span>
            <span
              className="badge text-bg-dark pt-2"
              style={{ height: "40px", fontSize: "20px" }}
            >
              {data.result?.category}
            </span>
          </span>
          <span>
            <span
              className="badge text-bg-light pt-2"
              style={{ height: "40px", fontSize: "20px" }}
            >
              {data.result?.specialTag}
            </span>
          </span>
          <p style={{ fontSize: "20px" }} className="pt-2">
            {data.result.description}
          </p>
          <span className="h3">${data.result?.price}</span> &nbsp;&nbsp;&nbsp;
          <span
            className="pb-2 p-3"
            style={{ border: "1px solid #333", borderRadius: "30px" }}
          >
            <i
              className="bi bi-dash p-1"
              style={{ fontSize: "25px", cursor: "pointer" }}
              onClick={() => handleMenuItemCounter(-1)}
            ></i>
            <span className="h3 mt-3 px-3">{menuItemCount}</span>
            <i
              className="bi bi-plus p-1"
              style={{ fontSize: "25px", cursor: "pointer" }}
              onClick={() => handleMenuItemCounter(1)}
            ></i>
          </span>
          <div className="row pt-4">
            <div className="col-5">
              {isAddingtoCart ? (
                <button disabled className="btn btn-success form-control">
                  <MiniLoader />
                </button>
              ) : (
                <button
                  className="btn btn-success form-control"
                  onClick={() => handleAddToCart(data.result?.id)}
                >
                  Add to Cart
                </button>
              )}
            </div>
            <div className="col-5">
              <button
                className="btn btn-secondary form-control"
                onClick={() => navigate(-1)}
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
        <div className="col-5">
          <img
            // src="https://via.placeholder.com/150"
            src={data.result?.image}
            alt="No content"
            width="100%"
            style={{ borderRadius: "50%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default MenuItemDetails;
