import React, { useState } from "react";
import { cardItemModel, userModel } from "../../Interface";
import { useSelector } from "react-redux";
import { RootState } from "../../Storage/Redux/store";
import { useUpdateShoppingCartMutation } from "../../Apis/shoppingCartApi";

function CartSummary() {
  const shoppingCartFromStore: cardItemModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cardItems ?? []
  );
  const userData: userModel = useSelector(
    (state: RootState) => state.userAuthStore
  );
  const [updateShoppingCart] = useUpdateShoppingCartMutation();
  const [isAddingtoCart, setIsAddingtoCartState] = useState(false);

  const handleDashPlus = async (menuItemId: number, quantity: number) => {
    setIsAddingtoCartState(true);
    await updateShoppingCart({
      menuItemId: menuItemId,
      updateQuantityBy: quantity,
      userId: userData.id,
    });

    setIsAddingtoCartState(false);
  };

  return (
    <div className="container p-4 m-2">
      <h4 className="text-center text-success">Cart Summary</h4>
      {shoppingCartFromStore.length > 0 ? (
        shoppingCartFromStore.map((item: cardItemModel, index: number) => {
          return (
            <div
              key={index}
              className="d-flex flex-sm-row flex-column align-items-center custom-card-shadow rounded m-3"
              style={{ background: "ghostwhite" }}
            >
              <div className="p-3">
                <img
                  src={item.menuItem?.image}
                  alt=""
                  width={"120px"}
                  className="rounded-circle"
                />
              </div>

              <div className="p-2 mx-3" style={{ width: "100%" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 style={{ fontWeight: 300 }}>{item.menuItem?.name}</h4>
                  <h4>
                    ${(item.quantity! * item.menuItem!.price!).toFixed(2)}
                  </h4>
                </div>
                <div className="flex-fill">
                  <h4 className="text-danger">${item.menuItem?.price}</h4>
                </div>
                <div className="d-flex justify-content-between">
                  <div
                    className="d-flex justify-content-between p-2 mt-2 rounded-pill custom-card-shadow  "
                    style={{
                      width: "100px",
                      height: "43px",
                    }}
                  >
                    <span style={{ color: "rgba(22,22,22,.7)" }} role="button">
                      <i
                        className="bi bi-dash-circle-fill"
                        onClick={() => handleDashPlus(item.menuItemId ?? 0, -1)}
                      ></i>
                    </span>
                    <span>
                      <b>{item.quantity}</b>
                    </span>
                    <span style={{ color: "rgba(22,22,22,.7)" }} role="button">
                      <i
                        className="bi bi-plus-circle-fill"
                        onClick={() => handleDashPlus(item.menuItemId ?? 0, 1)}
                      ></i>
                    </span>
                  </div>

                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => handleDashPlus(item.menuItemId ?? 0, 0)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <h6>
            There are no items in your cart. Please add items to continue.
          </h6>
        </div>
      )}
    </div>
  );
}

export default CartSummary;
