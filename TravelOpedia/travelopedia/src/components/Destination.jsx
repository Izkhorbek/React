import React, { useState } from "react";
import { useDeleteOneDestinationMutation } from "../api/destinationApi";
import { useUpdateOneDestinationMutation } from "../api/destinationApi";

function Destination({ destination }) {
  const [edit, setEditState] = useState(false);
  const [editCity, setEditCity] = useState("");
  const [editCountry, setEditCountry] = useState("");

  const handleEditChange = function () {
    setEditState(!edit);
    setEditCity(destination.city);
    setEditCountry(destination.country);
  };

  const [deleteDestination] = useDeleteOneDestinationMutation();
  const [updateDestination] = useUpdateOneDestinationMutation();
  return (
    <article key={destination.id}>
      <div
        className=" row text-center text-info p-1"
        style={{ border: "1px solid #333" }}
      >
        <div className="text-start col-3 offset-2">
          {edit ? (
            <div className="row">
              <input
                type="text"
                className="col-4"
                defaultValue={editCity}
                onChange={(e) => setEditCity(e.target.value)}
              ></input>
              <input
                type="text"
                className="col-4 offset-4"
                defaultValue={editCountry}
                onChange={(e) => setEditCountry(e.target.value)}
              ></input>
            </div>
          ) : (
            <div className="row">
              <spin className="col-4 text-left">{destination.city}</spin>
              <spin className="col-4  offset-4 text-left">
                {destination.country}
              </spin>
            </div>
          )}
        </div>
        <div className="col-3 text-warning">{destination.daysNeeded} days</div>

        <div className="col-1 ">
          <button
            className="btn btn-warning form-control"
            onClick={() => handleEditChange()}
          >
            {edit ? "Cancel" : "Edit"}
          </button>
        </div>
        {edit && (
          <div className="col-1">
            <button
              className="btn btn-primary form-control"
              onClick={() => {
                updateDestination({
                  id: destination.id,
                  city: editCity,
                  country: editCountry,
                  daysNeeded: destination.daysNeeded,
                });
                setEditState(!edit);
              }}
            >
              Update
            </button>
          </div>
        )}
        <div className="col-1">
          <button
            onClick={() => deleteDestination({ id: destination.id })}
            className="btn btn-danger  form-control"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default Destination;
