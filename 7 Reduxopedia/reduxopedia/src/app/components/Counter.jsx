import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementMult,
  decrementMult,
} from "../../redux/slice/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counterStore.countSlice);
  const dispatch = useDispatch();

  const [valueMult, setvalueMult] = useState(0);
  return (
    <div
      className="border mt-2 pt-3 pl-2 text-center"
      style={{ borderTop: "1px solid #999" }}
    >
      <div className="text-white pb-2 h4">Count: {count}</div>
      <div className="border row">
        <div className="p-4 col-12 col-md-6">
          <h4 className="text-success">Basic Counter</h4>
          <div className="border p-4">
            <button
              onClick={() => dispatch(increment())}
              className="btn btn-primary"
            >
              Add
            </button>
            &nbsp;
            <button
              onClick={() => dispatch(decrement())}
              className="btn btn-danger"
            >
              Remove
            </button>
          </div>
        </div>
        <div className="border p-4 col-12 col-md-6">
          <h4 className="text-success">Multiplier Counter</h4>
          <div className="border p-4">
            <div className="row">
              <div className="border col-4 p-1">
                <input
                  type="text"
                  placeholder="multiper..."
                  className="form-control"
                  onChange={(e) => setvalueMult(Number(e.target.value))}
                ></input>
              </div>
              <div className="border col-4 p-1">
                {" "}
                <button
                  onClick={() => dispatch(incrementMult(valueMult))}
                  className="btn btn-primary form-control"
                >
                  AddMultiplier
                </button>
              </div>
              <div className="border col-4 p-1">
                {" "}
                <button
                  onClick={() => dispatch(decrementMult(valueMult))}
                  className="btn btn-danger form-control"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
