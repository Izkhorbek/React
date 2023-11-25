import React from "react";
import { useDispatch } from "react-redux";
<<<<<<< Updated upstream

import { resetReduxOpedia } from "../../redux/actions/actions";
function ResetApp() {
  const dispatch = useDispatch();
  const reset = () => {
    dispatch(resetReduxOpedia());
=======
import { resetDestination } from "../../redux/slice/destinationSlice";
function ResetApp() {
  const dispatch = useDispatch();
  const reset = () => {
    dispatch(resetDestination());
    //dispatch(resetCount());
>>>>>>> Stashed changes
  };

  return (
    <div className="text-center">
      <button className="btn btn-warning" onClick={reset}>
        Reset App
      </button>
    </div>
  );
}

export default ResetApp;
