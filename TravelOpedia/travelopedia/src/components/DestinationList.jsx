import React from "react";
import { useGetAllDestinationQuery } from "../api/destinationApi";
import Destination from "./Destination";

function DestinationList() {
  const { data, isLoading, isSuccess, isError } = useGetAllDestinationQuery();

  let content = <div></div>;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.map((destination) => {
      return <Destination destination={destination} />;
    });
  } else if (isError) content = <p>Error</p>;

  return <div className="pt-3">{content}</div>;
}

export default DestinationList;
