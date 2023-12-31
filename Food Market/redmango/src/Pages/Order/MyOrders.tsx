import React from "react";
import { WithAuth } from "../../HOC";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../Storage/Redux/store";
import { useGetAllOrdersQuery } from "../../Apis/orderApi";
import { OrderList } from "../../Components/Layout/Page/Order";
import { MainLoader } from "../../Components/Layout/Page/Common";

function MyOrders() {
  const userId = useSelector((state: RootState) => state.userAuthStore.id);
  const { data, isLoading } = useGetAllOrdersQuery(userId);

  return (
    <>
      {isLoading && <MainLoader />}
      {!isLoading && (
        <OrderList isLoading={isLoading} orderData={data?.result} />
      )}
    </>
  );
}

export default WithAuth(MyOrders);
