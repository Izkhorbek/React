import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useUpdateMenuItemMutation,
  useGetMenuItemsQuery,
  useDeteleMenuItembyIdMutation,
} from "../../Apis/menuItemApi";
import { MainLoader } from "../../Components/Layout/Page/Common";
import { menuItemModel } from "../../Interface";
import { toast } from "react-toastify";
import { toastNotify } from "../../Helper";

function MenuItemList() {
  const { data, isLoading } = useGetMenuItemsQuery(null);
  const [updateMenuItem] = useUpdateMenuItemMutation();
  const [deleteMenuItem] = useDeteleMenuItembyIdMutation();
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleTrashItem = async (id: number) => {
    setIsProcessing(true);
    await toast.promise(
      deleteMenuItem(id),
      {
        pending: "Deleting is pending",
        success: "Menu Item is deleted",
        error: "Menu Item deleting is error",
      },
      { theme: "dark" }
    );

    setIsProcessing(false);
  };

  return (
    <>
      <div className="p-5 table">
        <div className="d-flex justify-content-between align-items-center">
          <h1>MenuItem List</h1>
          <div>
            <button
              className="btn btn-success"
              onClick={() => navigate("/menuitem/menuitemupsert")}
            >
              Add new Menu Item
            </button>
          </div>
        </div>
        <div className="p-2">
          <div className="border row h4">
            <div className="col-1">Image</div>
            <div className="col-1">ID</div>
            <div className="col-2">Name</div>
            <div className="col-2">Category</div>
            <div className="col-1">Price</div>
            <div className="col-2">Special Tag</div>
            <div className="col-3">Action</div>
          </div>
          {isLoading && <MainLoader />}
          {!isLoading &&
            data?.result.map((item: menuItemModel, index: number) => {
              return (
                <div className="border row" key={item.id}>
                  <div className="col-1">
                    <img
                      src={item.image}
                      alt="no content"
                      style={{ width: "100%", maxWidth: "120px" }}
                    ></img>
                  </div>
                  <div className="col-1">{item.id}</div>
                  <div className="col-2">{item.name}</div>
                  <div className="col-2">{item.category}</div>
                  <div className="col-1">${item.price!}</div>
                  <div className="col-2">{item.specialTag}</div>
                  <div className="col-3">
                    <button
                      className="btn btn-danger bi bi-trash3 m-2"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleTrashItem(item.id)}
                    ></button>
                    <button
                      className="btn btn-success bi bi-pencil-square"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate(`/menuitem/menuitemupsert/${item.id}`)
                      }
                    ></button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default MenuItemList;
