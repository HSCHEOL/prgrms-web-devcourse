import React from "react";

const Boolean = ({ study }) => {
  const message = study ? "공부하자" : "쉬자 걍 ㅅㅂ";

  return <>{message}</>;
};

export default Boolean;
