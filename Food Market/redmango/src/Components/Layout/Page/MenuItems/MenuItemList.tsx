import React, { useEffect, useState } from "react";
import { menuItemModel } from "../../../../Interface";
import { request } from "http";
import MenuItemCard from "./MenuItemCard";
let mainView = require("../../../../Assets/Images/mainView.jpg");

function MenuItemList() {
  const [menuItems, setMenuItemsState] = useState<menuItemModel[]>([]);

  useEffect(() => {
    fetch("https://redmangoapi.azurewebsites.net/api/MenuItem")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result);
        setMenuItemsState(data.result);
      });
  }, []);
  return (
    <div className="row">
      {menuItems.length > 0 &&
        menuItems.map((menuItem, index) => (
          <MenuItemCard menuItem={menuItem} key={index} />
        ))}
    </div>
  );
}

export default MenuItemList;
