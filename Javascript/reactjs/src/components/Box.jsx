import React from "react";

const Box = () => {
  console.log("Render");
  const style = {
    width: 300,
    height: 300,
    backgroundColor: "red",
  };

  return <div style={style}></div>;
};

export default Box;
