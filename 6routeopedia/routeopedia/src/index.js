import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import About from "./About";
import Home from "./Home";
import CryptoDetail from "./CryptoDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Pages/ProductDetails";
import CreateProduct from "./Pages/CreateProduct";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/productlist" element={<ProductList />}></Route>
        <Route path="/createproduct" element={<CreateProduct />}></Route>
        <Route path="/productdetails" element={<ProductDetails />}></Route>

        <Route path="/cryptodetail" element={<CryptoDetail />}></Route>
        <Route path="/notfound" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
