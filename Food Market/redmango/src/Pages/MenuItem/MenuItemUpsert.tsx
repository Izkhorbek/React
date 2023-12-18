import React, { useEffect, useState } from "react";
import { inputHelper, toastNotify } from "../../Helper";
import { read } from "fs";
import {
  useCreateMenuItemMutation,
  useGetMenuItembyIdQuery,
  useUpdateMenuItemMutation,
} from "../../Apis/menuItemApi";
import { useNavigate, useParams } from "react-router-dom";
import { MainLoader } from "../../Components/Layout/Page/Common";
import { SD_Categories } from "../../Utility/SD";

const Categories = [
  SD_Categories.APPETIZER,
  SD_Categories.BEVERAGES,
  SD_Categories.DESSERT,
  SD_Categories.ENTREE,
];

const menuItemData = {
  name: "",
  description: "",
  specialTag: "",
  category: Categories[0],
  price: "",
};

function MenuItemUpsert() {
  const [menuItemInput, setUserInput] = useState(() => menuItemData);
  const [imageToStore, setImageToStore] = useState<any>();
  const [imageToDisplay, setImageToDisplay] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [createMenuItem] = useCreateMenuItemMutation();
  const navigate = useNavigate();
  const { menuItemId } = useParams();
  const { data } = useGetMenuItembyIdQuery(menuItemId);
  const [updateMenuItem] = useUpdateMenuItemMutation();

  useEffect(() => {
    if (data && data.result) {
      const tempItemData = {
        name: data.result.name,
        description: data.result.description,
        specialTag: data.result.specialTag,
        category: data.result.category,
        price: data.result.price,
      };

      setUserInput(tempItemData);
      setImageToDisplay(data.result.image);
    }
  }, [data]);

  const handelInputElement = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const tempData = inputHelper(e, menuItemInput);
    setUserInput(tempData);
  };

  //FileChange
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const imgType = file.type.split("/")[1];

      const validImgType = ["jpeg", "png", "jpg"];

      const isImgTypeValid = validImgType.filter((e) => {
        return e === imgType;
      });

      if (file.size > 2000 * 1024) {
        setImageToStore("");
        toastNotify("File must be less than 2 Mb", "error");
        return;
      } else if (isImgTypeValid.length === 0) {
        setImageToStore("");
        toastNotify("File must be in jpeg, png or jpg", "error");
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      // set image file to store
      setImageToStore(file);

      //load image to show in display window
      reader.onload = (e) => {
        const imgUrl = e.target?.result as string;
        // set imgUrl to variable to use to display window
        setImageToDisplay(imgUrl);
      };
    }
  };

  // Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!imageToStore && !menuItemId) {
      toastNotify("Please upload an image", "error");
      setLoading(false);
      return;
    }

    const formData = new FormData();

    formData.append("Name", menuItemInput.name);
    formData.append("Description", menuItemInput.description);
    formData.append("SpecialTag", menuItemInput.specialTag ?? "");
    formData.append("Category", menuItemInput.category);
    formData.append("Price", menuItemInput.price);
    if (imageToDisplay) formData.append("File", imageToStore);

    let response;
    if (menuItemId) {
      formData.append("Id", menuItemId);
      response = await updateMenuItem({
        itemDetails: formData,
        id: menuItemId,
      });
      toastNotify("Menu Item is Updated", "success");
    } else {
      response = await createMenuItem(formData);
      toastNotify("New Menu Item is Addedd", "success");
    }

    if (response) {
      navigate("/menuItem/menuItemlist");
      setLoading(false);
    }
  };
  return (
    <div
      className="container mt-5 p-5 border"
      style={{ background: "#f2f2f2" }}
    >
      {loading && <MainLoader />}
      <h3 className="px-2 text-success">
        {menuItemId ? "Update Menu Item" : "Add new Menu Item"}
      </h3>
      <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className=" row mt-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Enter Name"
              name="name"
              value={menuItemInput.name}
              onChange={handelInputElement}
              required
            ></input>
            <textarea
              className="form-control mt-2"
              placeholder="Enter Description"
              rows={10}
              name="description"
              value={menuItemInput.description}
              onChange={handelInputElement}
            ></textarea>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Enter Special Tag"
              name="specialTag"
              value={menuItemInput.specialTag}
              onChange={handelInputElement}
            ></input>
            <select
              className="form-select mt-3"
              name="category"
              value={menuItemInput.category}
              onChange={handelInputElement}
              placeholder="Enter Category"
            >
              {Categories.map((category) => {
                return <option value={category}>{category}</option>;
              })}
            </select>
            <input
              type="number"
              className="form-control mt-3"
              placeholder="Enter Price"
              name="price"
              value={menuItemInput.price}
              onChange={handelInputElement}
            ></input>
            <input
              type="file"
              className="form-control mt-3"
              onChange={handleFileChange}
            ></input>
            <div className="row mt-3">
              <div className="col-6">
                <button type="submit" className="btn btn-success form-control">
                  Update
                </button>
              </div>
              <div className="col-6">
                <a
                  onClick={() => navigate("/menuItem/menuItemlist")}
                  className="form-control btn btn-secondary"
                >
                  Back to Menu Items
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-5 text-center offset-1">
            <img
              src={imageToDisplay}
              style={{ width: "100%", borderRadius: "30px" }}
              alt=""
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default MenuItemUpsert;
