import React from "react";

const ChangeProps = ({ name }) => {
  function changeName() {
    console.log(name);
    name = "React";
    console.log(name);
  }

  return (
    <div>
      {name};<button onClick={changeName}>클릭</button>
    </div>
  );
};

export default ChangeProps;
