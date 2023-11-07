import React, { useEffect, useState } from "react";
import { menuItemModel } from "../../../../Interface";
import { request } from "http";
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
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={mainView} alt="" className="img-fluid"></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#section" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default MenuItemList;
