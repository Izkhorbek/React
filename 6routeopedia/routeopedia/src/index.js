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
        <Route path="" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="product">
          <Route path="" element={<Product />}></Route>
          <Route path="list" element={<ProductList />}></Route>
          <Route path="create" element={<CreateProduct />}></Route>
          <Route path="details" element={<ProductDetails />}>
            <Route path=":productId"></Route>
          </Route>
        </Route>
        <Route path="cryptodetail" element={<CryptoDetail />}>
          <Route path=":cryptoSymbol" element={<CryptoDetail />}>
            <Route path=":id" element={<CryptoDetail />}></Route>
          </Route>
        </Route>

        <Route path="/notfound" element={<NotFound />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
