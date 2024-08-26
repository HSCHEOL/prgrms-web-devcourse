import { useState } from "react";
import Board from "./components/Board";

function App() {
  const articles = [
    {
      id: 1,
      title: "ㅎㅇ나는 뭐야",
      author: "이이선협",
    },
    {
      id: 1,
      title: "ㅎㅇ나는 뭐야",
      author: "이이선협",
    },
    {
      id: 1,
      title: "ㅎㅇ나는 뭐야",
      author: "이이선협",
    },
  ];

  return (
    <div>
      <Board articles={articles} />
    </div>
  );
}

export default App;
