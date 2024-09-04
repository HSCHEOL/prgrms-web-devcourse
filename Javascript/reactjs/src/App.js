import React, { useEffect, useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

//부모 컴포넌트에서 setResult 를 내려서 사용자의 입력 result를 객체 배열로 받아온다.

const App = () => {
  const [result, setResult] = useState([]);

  const handleDelete = (index) => {
    setResult((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <main>
      <h1>전체 회원 수:{result.length}</h1>
      <UserInput setResult={setResult} /> <br />
      <UserOutput result={result} handleDelete={handleDelete} />
    </main>
  );
};

export default App;
