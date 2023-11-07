import React from "react";
import { useGetRandomDestinationQuery } from "../api/randomDestinationApi";

function RandomDestination() {
  const { data, isLoading } = useGetRandomDestinationQuery();
  //console.log(data);
  //const [city, country] = data;
  return (
    <div className="row">
      <h2 className="text-center text-success">Suggestion Travel List</h2>
      <div className="text-success text-center">
        {data.city}, {data.country}
      </div>
    </div>
  );
}

export default RandomDestination;
