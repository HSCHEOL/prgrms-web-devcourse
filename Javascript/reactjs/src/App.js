import React, { useRef, useState } from "react";

const App = () => {
  const [name, setName] = useState(" ");
  const [ageValue, setAgeValue] = useState(""); // 나이도 상태로 관리

  const names = useRef("");
  const age = useRef("");

  const nameChange = () => {
    setName(names.current.value);
  };

  const ageChange = () => {
    setAgeValue(age.current.value);
  };

  return (
    <div>
      <div>
        <h1>input 태그 value 값 지정</h1>
        이름:{" "}
        <input type="text" value={name} ref={names} onChange={nameChange} />
        나이:{" "}
        <input type="number" value={ageValue} ref={age} onChange={ageChange} />
      </div>
    </div>
  );
};

export default App;
