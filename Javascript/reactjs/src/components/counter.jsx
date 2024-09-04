import React, { useReducer } from "react";

const Counter = () => {
  const [count, dispatch] = useReducer(countReducer, 0);

  function countReducer(state, action) {
    switch (action.type) {
      case "UP": {
        console.log("카운터 업");
        return state + 1;
      }
      case "Down": {
        console.log("카운터 다운");
        if (state > 0) {
          return state - 1;
        }
      }
      default:
        return state;
    }
  }

  return (
    <div>
      <h1>현재 count 값은 {count}</h1>
      <button onClick={() => dispatch({ type: "UP" })}>+</button>
      <button onClick={() => dispatch({ type: "Down" })}>-</button>
    </div>
  );
};

export default Counter;
