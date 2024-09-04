import React, { useReducer, useState } from "react";

const UserInput = ({ setResult, result }) => {
  //   const init = { name: " ", age: 0, region: " " };
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [region, setRegion] = useState("");

  const Add = (name, age, region) => {
    if (name === "" || age === 0) {
      alert("이름과 나이를 모두 입력하세요.");
    } else {
      const date = { name, age, region };
      setResult((prev) => [...prev, date]);
    }

    setName("");

    setRegion("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        height: "450px",
        backgroundColor: "mistyrose",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50px",
      }}
    >
      <h2>이름 </h2>
      <input
        value={name}
        placeholder="이름을 입력하세요."
        type="text"
        style={{ width: "300px", height: "30px" }}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      <h2>나이 </h2>
      <input
        value={age}
        placeholder="나이를 입력하세요."
        type="number"
        style={{ width: "300px", height: "30px" }}
        onChange={(e) => setAge(Number(e.target.value))}
      />{" "}
      <br />
      <h2>지역 </h2>
      <select
        value={region}
        style={{ width: "300px", height: "30px" }}
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="">지역을 선택하세요.</option>
        <option value="서울">서울</option>
        <option value="인천">인천</option>
        <option value="부산">부산</option>
        <option value="대구">대구</option>
        <option value="광주">광주</option>
        <option value="대전">대전</option>
        <option value="세종">세종</option>
      </select>
      <br />
      <br />
      <button
        style={{
          border: "none",
          backgroundColor: "pink",
          height: "30px",
          borderRadius: "20px",
          width: "100px",
        }}
        onClick={() => Add(name, age, region)}
      >
        추가
      </button>
    </div>
  );
};

export default UserInput;
