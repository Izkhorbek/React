import React from "react";
import { WithAdminAuth } from "../../HOC";
import { useGetAllOrdersQuery } from "../../Apis/orderApi";
import { OrderList } from "../../Components/Layout/Page/Order";
import { MainLoader } from "../../Components/Layout/Page/Common";

function AllOrders() {
  const { data, isLoading } = useGetAllOrdersQuery("");

  return (
    <>
      {isLoading && <MainLoader />}
      {!isLoading && (
        <OrderList isLoading={isLoading} orderData={data?.result} />
      )}
    </>
  );
}

export default WithAdminAuth(AllOrders);
