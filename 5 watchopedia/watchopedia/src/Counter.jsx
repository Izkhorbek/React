import { useState } from "react";

const Counter = () => {
  const [counterState, setCountState] = useState(()=>{
    return { counter: 0};
  });

  function incrementCounter() {
    setCountState((prevState) => {
      return{ counter: prevState.counter + 1 };
    });
  }
  function decrementCounter() {
    setCountState((prevState) => {
        return{ counter: prevState.counter - 1 };
    });
  }
  return (
    <div className="border col-12 col-md-4 offset-md-4 text-white">
      <span className="h2 pt-4 m-2 text-white-50">Fun Counter</span> <br />
      <button onClick={incrementCounter} className="btn btn-success m-1">
        +1
      </button>
      <button onClick={decrementCounter} className="btn btn-danger m-1">
        -1
      </button>
      <br />
      <span className="h4">
        Counter: &nbsp;
        <span className="text-success">{counterState.counter}</span>
      </span>
    </div>
  );
};

export default Counter;
