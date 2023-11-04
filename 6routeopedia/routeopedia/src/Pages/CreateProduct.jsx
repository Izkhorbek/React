import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
function CreateProduct() {
  const navigate = useNavigate();

  return (
    <div>
      CreateProduct
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        GO BACK
      </button>
    </div>
  );
}

export default CreateProduct;
