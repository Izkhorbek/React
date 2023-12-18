import React, { useEffect, useState } from "react";
import MenuItemCard from "./MenuItemCard";
import { useDispatch, useSelector } from "react-redux";
import { setMenuItem } from "../../../../Storage/Redux/menuItemSlice";
import { menuItemModel } from "../../../../Interface";
import { MainLoader } from "../Common";
import { useGetMenuItemsQuery } from "../../../../Apis/menuItemApi";
import { RootState } from "../../../../Storage/Redux/store";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { SD_Categories, SD_SortTypes, SD_Status } from "../../../../Utility/SD";

function MenuItemList() {
  const { data, isLoading } = useGetMenuItemsQuery(null);
  const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categoryList, setCategoryList] = useState([""]);
  const [sortName, setSortName] = useState(SD_SortTypes.NAME_A_Z);
  const dispatch = useDispatch();
  const searchItem = useSelector(
    (state: RootState) => state.menuItemStore.search
  );

  const sortOptions: Array<SD_SortTypes> = [
    SD_SortTypes.PRICE_LOW_HIGH,
    SD_SortTypes.PRICE_HIGH_LOW,
    SD_SortTypes.NAME_A_Z,
    SD_SortTypes.NAME_Z_A,
  ];
  useEffect(() => {
    if (data && data.result) {
      const responseList = handleFilterData(
        sortName,
        selectedCategory,
        searchItem
      );
      setMenuItems(responseList);
    }
  }, [searchItem]);

  useEffect(() => {
    if (!isLoading) {
      dispatch(setMenuItem(data.result));
      setMenuItems(data.result);

      const tempCategoryList = ["All"];
      data.result.forEach((item: menuItemModel) => {
        if (tempCategoryList.indexOf(item.category) === -1) {
          tempCategoryList.push(item.category);
        }
      });

      setCategoryList(tempCategoryList);
    }
  }, [isLoading]);

  // filter DaTa
  const handleFilterData = (
    sortType: SD_SortTypes,
    category: string,
    search: string
  ) => {
    let tempArray =
      //filter by category
      category === "All"
        ? [...data.result]
        : data.result.filter((item: menuItemModel) =>
            item.category.toUpperCase().includes(category.toUpperCase())
          );

    // search
    if (search) {
      const tempArray2 = [...tempArray];
      tempArray = tempArray2.filter((item: menuItemModel) =>
        item.name.toUpperCase().includes(search.toUpperCase())
      );
    }

    //sort
    if (sortType === SD_SortTypes.PRICE_LOW_HIGH) {
      tempArray.sort((a: menuItemModel, b: menuItemModel) => a.price - b.price);
    }
    if (sortType === SD_SortTypes.PRICE_HIGH_LOW) {
      tempArray.sort((a: menuItemModel, b: menuItemModel) => b.price - a.price);
    }
    if (sortType === SD_SortTypes.NAME_A_Z) {
      tempArray.sort(
        (a: menuItemModel, b: menuItemModel) =>
          a.name.toUpperCase().charCodeAt(0) -
          b.name.toUpperCase().charCodeAt(0)
      );
    }
    if (sortType === SD_SortTypes.NAME_Z_A) {
      tempArray.sort(
        (a: menuItemModel, b: menuItemModel) =>
          b.name.toUpperCase().charCodeAt(0) -
          a.name.toUpperCase().charCodeAt(0)
      );
    }
    return tempArray;
  };

  const handleCategoryChange = (index: number) => {
    const buttons = document.querySelectorAll(".custom-buttons");
    buttons.forEach((button, i) => {
      if (index === i) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    let categoryItem: string = "";
    index === 0
      ? (categoryItem = "All")
      : index === 1
      ? (categoryItem = SD_Categories.APPETIZER)
      : index === 2
      ? (categoryItem = SD_Categories.ENTREE)
      : index === 3 && (categoryItem = SD_Categories.DESSERT);

    setSelectedCategory(categoryItem);
    const menuItemList = handleFilterData(sortName, categoryItem, searchItem);
    setMenuItems(menuItemList);
  };

  const handleSortChange = (sortType: SD_SortTypes) => {
    setSortName(sortType);
    const sortedList = handleFilterData(sortType, selectedCategory, searchItem);
    setMenuItems(sortedList);
  };
  return (
    <div className="row container">
      <div className="my-3">
        <ul className="nav w-100 d-flex justify-content-center">
          {categoryList.map((category: string, index: number) => (
            <li
              className="nav-item"
              style={{ ...(index === 0 && { marginLeft: "auto" }) }}
              key={index}
            >
              <button
                className={`nav-item p-0 pb-2 custom-buttons fs-5 ${
                  index === 0 && "active"
                }`}
                onClick={() => handleCategoryChange(index)}
              >
                {category}
              </button>
            </li>
          ))}
          <li className="nav-item dropdown" style={{ marginLeft: "auto" }}>
            <div
              className="nav-link dropdown-toggle text-dark fs-6 border"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded={false}
            >
              {sortName}
            </div>
            <ul className="dropdown-menu">
              {sortOptions.map((option, index) => (
                <li
                  className="dropdown-item"
                  key={index}
                  onClick={() => handleSortChange(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      {isLoading && <MainLoader />}
      {!isLoading &&
        menuItems.length > 0 &&
        menuItems.map((menuItem: menuItemModel, index: number) => (
          <MenuItemCard menuItem={menuItem} key={index} />
        ))}
    </div>
  );
}

export default MenuItemList;
