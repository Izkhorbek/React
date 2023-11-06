import React from "react";
import { useDispatch } from "react-redux";

import { resetReduxOpedia } from "../../redux/actions/actions";
function ResetApp() {
  const dispatch = useDispatch();
  const reset = () => {
    dispatch(resetReduxOpedia());
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
