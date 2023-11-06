import React from "react";
import { useState } from "react";
import { useAddOneDestinationMutation } from "../api/destinationApi";

function AddDestination() {
  const [newCity, setCityState] = useState("");
  const [newCountry, setCountryState] = useState("");

  const [addDestinationMutation] = useAddOneDestinationMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newCity && newCountry) {
      addDestinationMutation({
        id: Math.random() * 100,
        city: newCity,
        country: newCountry,
        daysNeeded: parseInt(Math.random() * 100),
      });
    }
    setCityState("");
    setCountryState("");
  };

  return (
    <div className="border p-4">
      <form onSubmit={handleSubmit}>
        <div className="row col-8 offset-2">
          <h4> Enter a new Destination</h4>
          <div className="col-5 p-1">
            <input
              type="text"
              value={newCity}
              onChange={(e) => setCityState(e.target.value)}
              className="form-control"
              placeholder="Enter city..."
            ></input>
          </div>
          <div className="col-5 p-1">
            <input
              type="text"
              value={newCountry}
              onChange={(e) => setCountryState(e.target.value)}
              className="form-control"
              placeholder="Enter country..."
            ></input>
          </div>
          <div className="col-2 p-1">
            <button className="btn btn-success form-control">Add </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddDestination;
