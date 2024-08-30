import React, { useState } from "react";

const ChildComponent = ({ setTotalcount }) => {
  const [count, setCount] = useState(0);

  const CountUp = () => {
    setCount(count + 1);
    setTotalcount((cur) => cur + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "gray",
        width: "300px",
        height: "300px",
        border: "2px solid black",
        margin: "10px",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "1px 1px 2px 1px",
      }}
    >
      <h1>{count}</h1>
      <button
        style={{ height: "50px", width: "100px", border: "none" }}
        onClick={CountUp}
      >
        Click
      </button>
    </div>
  );
};

export default ChildComponent;
