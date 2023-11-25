import React, { useEffect } from "react";
import MenuItemCard from "./MenuItemCard";
import { useDispatch } from "react-redux";
import { setMenuItem } from "../../../../Storage/Redux/menuItemSlice";
import { menuItemModel } from "../../../../Interface";
import { MainLoader } from "../Common";
import { useGetMenuItemsQuery } from "../../../../Apis/menuItemApi";

function MenuItemList() {
  const { data, isLoading } = useGetMenuItemsQuery(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      dispatch(setMenuItem(data.result));
    }
  }, [isLoading]);

  if (isLoading) {
    return <MainLoader />;
  }
  return (
    <div className="row container offset-2">
      {data.result.length > 0 &&
        data.result.map((menuItem: menuItemModel, index: number) => (
          <MenuItemCard menuItem={menuItem} key={index} />
        ))}
    </div>
  );
}

export default MenuItemList;
