import React, { useState } from "react";
import { Footer, Header } from "../Components/Layout";
import {
  AccessDenied,
  AllOrders,
  AuthenticationAdmin,
  AuthorizationCustom,
  Home,
  Login,
  MenuItemDetails,
  MenuItemList,
  MenuItemUpsert,
  MyOrders,
  NotFound,
  OrderConfirmed,
  OrderDetails,
  Payment,
  Register,
  ShoppingCart,
} from "../Pages";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetShoppingCartQuery } from "../Apis/shoppingCartApi";
import { setShoppingCart } from "../Storage/Redux/shoppingCartSlice";
import { jwtDecode } from "jwt-decode";
import { setLoggedInUser } from "../Storage/Redux/userAuthSlice";
import { userModel } from "../Interface";
import { RootState } from "../Storage/Redux/store";

function App() {
  const dispatch = useDispatch();
  const [skip, setSkip] = useState(true);
  const userId: string = useSelector(
    (state: RootState) => state.userAuthStore.id
  );
 const { data, isLoading } = useGetShoppingCartQuery(userId, {
    skip: skip,
  }); 

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      const { fullName, id, email, role }: userModel = jwtDecode(localToken);
      dispatch(setLoggedInUser({ fullName, id, email, role }));
    }
  }, []);

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(setShoppingCart(data.result?.cartItems));
    }
  }, [data]);

  useEffect(() => {
    if (userId) setSkip(false);
  }, [userId]);
  return (
    <div className="text-success">
      <Header />
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/menuItemDetails/:menuItemId"
            element={<MenuItemDetails />}
          ></Route>
          <Route path="/shoppingCart" element={<ShoppingCart />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route
            path="/order/orderconfirmed/:id"
            element={<OrderConfirmed />}
          ></Route>
          <Route
            path="/menuitem/menuitemlist"
            element={<MenuItemList />}
          ></Route>

          <Route path="/order/myorders" element={<MyOrders />}></Route>
          <Route path="/order/allorders" element={<AllOrders />}></Route>
          <Route
            path="/menuitem/menuitemupsert"
            element={<MenuItemUpsert />}
          ></Route>
          <Route
            path="/menuitem/menuitemupsert/:menuItemId"
            element={<MenuItemUpsert />}
          ></Route>
          <Route
            path="/order/orderdetails/:id"
            element={<OrderDetails />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
