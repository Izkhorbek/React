import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./app/layout/Header.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import Counter from "./app/components/Counter.jsx";
import DestinationList from "./app/components/DestinationList.jsx";
import DestinationFact from "./app/components/DestinationFact.jsx";
import ResetApp from "./app/components/ResetApp.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="text-white">
    <Provider store={store}>
      <Header />
      <ResetApp />
      <Counter />
      <div className="border p-1 text-center">
        <h4 className="text-success pb-4">Destination List</h4>
        <DestinationList />
      </div>
      <DestinationFact />
    </Provider>
  </div>
);
