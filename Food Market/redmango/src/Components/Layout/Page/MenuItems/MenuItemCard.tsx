import React, { useState } from "react";
import { menuItemModel } from "../../../../Interface";
import { Link } from "react-router-dom";
import { useUpdateShoppingCartMutation } from "../../../../Apis/shoppingCartApi";
import { MiniLoader } from "../Common";

interface Props {
  menuItem: menuItemModel;
}

function MenuItemCard(props: Props) {
  const [updateShoppingCart] = useUpdateShoppingCartMutation();
  const [isAddingtoCart, setIsAddingtoCartState] = useState(false);

  const handleCartPlus = async (menuItemId: number) => {
    setIsAddingtoCartState(true);
    await updateShoppingCart({
      menuItemId: menuItemId,
      updateQuantityBy: 1,
      userId: "f9d964e8-bff1-4851-92b7-389c8415d4ff",
    });

    setIsAddingtoCartState(false);
  };

  return (
    <div className="col-md-3 col-12 p-4">
      <div
        className="card"
        style={{ boxShadow: "0 1px 7px 0 rgb(0 0 0 / 50%)" }}
      >
        <div className="card-body pt-2">
          <div className="row col-10 offset-1 p-4">
            <Link to={`/menuItemDetails/${props.menuItem.id}`}>
              <img
                src={props.menuItem.image}
                alt=""
                style={{ borderRadius: "50%" }}
                className="w-100 mt-5 image-box"
              />
            </Link>
          </div>

          {props.menuItem.specialTag &&
            props.menuItem.specialTag.length > 0 && (
              <i
                className="bi bi-star btn btn-success"
                style={{
                  position: "absolute",
                  top: "15px",
                  left: "15px",
                  padding: "5px 10px",
                  borderRadius: "3px",
                  outline: "none !important",
                  cursor: "pointer",
                }}
              >
                &nbsp;{props.menuItem.specialTag}
              </i>
            )}

          {isAddingtoCart ? (
            <div style={{ position: "absolute", top: "15px", right: "15px" }}>
              <MiniLoader type="warning" size={100} />
            </div>
          ) : (
            <i
              className="bi bi-cart-plus btn btn-outline-danger"
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                padding: "5px 10px",
                borderRadius: "3px",
                outline: "none !important",
                cursor: "pointer",
              }}
              onClick={() => handleCartPlus(props.menuItem.id)}
            ></i>
          )}

          <div className="text-center">
            <p className="card-title m-0 text-success fs-3">
              <Link
                to={`/menuItemDetails/${props.menuItem.id}`}
                style={{ textDecoration: "none", color: "green" }}
              >
                {props.menuItem.name}.
              </Link>
            </p>
            <p className="badge bg-secondary" style={{ fontSize: "12px" }}>
              {props.menuItem.category}
            </p>
          </div>
          <p className="card-text" style={{ textAlign: "center" }}>
            {props.menuItem.description}
          </p>
          <div className="text-center h4">${props.menuItem.price}</div>
        </div>
      </div>
    </div>
  );
}

export default MenuItemCard;