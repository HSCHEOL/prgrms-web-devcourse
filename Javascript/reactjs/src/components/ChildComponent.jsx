import React from "react";

const ChildComponent = ({ setValue }) => {
  function updataValue(e) {
    console.log(e.target.value);

    setValue("안녕하세요");
  }

  return (
    <div>
      <input type="text" onChange={updataValue} />
    </div>
  );
};

export default ChildComponent;
