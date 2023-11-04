import React, { useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  const [goToProduct, setgoToProductState] = useState(() => {
    return false;
  });
  return (
    <div>
      Product
      <button
        onClick={() => {
          navigate("/product/list");
        }}
      >
        Add Product
      </button>
      <Link to="/product/create">
        <button>Navigate to product/create</button>
      </Link>
      {goToProduct && <Navigate to="/product/list" />}
      <button
        onClick={() => {
          setgoToProductState({ goToProduct: true });
        }}
      >
        Naviagte to Product/list using UseState
      </button>
    </div>
  );
}

export default Product;
