//요구사항
//1.counter 컴포넌트 구현하기
//2. 모든 counter 컴포넌트의 합 구하기
import { useState } from "react";
import Counter from "./components/counter";

function App() {
  const [totalcount, setTotalCount] = useState(0);

  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
