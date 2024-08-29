import React, { useState } from "react";
import UserID from "./components/UserID";
import UserPW from "./components/UserPW";

const App = () => {
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");

  const submit = () => {
    if (ID === "knr0012" && PW === "han074808") {
      alert("성공");
    } else {
      alert("로그인 실패");
    }
  };

  return (
    <>
      <UserID setID={setID} />
      <UserPW setPW={setPW} />
      <button onClick={submit}>제출</button>
    </>
  );
};

export default App;
