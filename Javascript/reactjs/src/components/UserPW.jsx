import React from "react";

const UserPW = ({ setPW }) => {
  const PWhandelr = (e) => {
    console.log(e.target.value);
    setPW(e.target.value);
  };

  return (
    <div>
      PW: <input type="text" onChange={PWhandelr} />
    </div>
  );
};

export default UserPW;
