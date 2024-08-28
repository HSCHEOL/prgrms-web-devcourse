import { useState } from "react";

//오류

import React from "react";

const Counter = ({ prop }) => {
  const handleClick = () => {
    if (prop) {
      prop();
    }
  };

  return (
    <div>
      <button onClick={handleClick}>실험</button>
    </div>
  );
};

export default Counter;
