import React from "react";

const UserID = ({ setID }) => {
  const IDhandelr = (e) => {
    console.log(e.target.value);
    setID(e.target.value);
  };

  return (
    <div>
      ID:
      <input onChange={IDhandelr} type="text" />
      <button>제출</button>
    </div>
  );
};

export default UserID;
