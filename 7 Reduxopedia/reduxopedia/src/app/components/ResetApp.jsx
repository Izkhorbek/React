import React from "react";
import { useDispatch } from "react-redux";
import { resetDestination } from "../../redux/slice/destinationSlice";
import { resetCount } from "../../redux/slice/counterSlice";
function ResetApp() {
  const dispatch = useDispatch();
  const reset = () => {
    dispatch(resetDestination());
    dispatch(resetCount());
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
