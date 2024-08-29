import React from "react";

const firstname = ({ name, color, logo }) => {
  return (
    <div>
      안녕하세요. 제 이름은 {name}입니다.
      <br />제 퍼스널 컬러는 {color} 입니다.
      <br />제 사진은 <img style={{ width: "100px" }} src={logo} alt="logo" />
      입니다.
      <br />
      <br />
    </div>
  );
};

export default firstname;
