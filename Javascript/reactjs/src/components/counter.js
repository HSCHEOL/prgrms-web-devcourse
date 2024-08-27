import { useState } from "react";

function Counter({ onChange }) {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handledecrease = () => {
    setCount(count - 1);

    if (count <= 0) {
      alert("0보다 작을 수 없습니다.");
      setCount(count);
    }
  };

  return (
    <div>
      {count}
      <button onClick={handleIncrease}>+</button>
      <button onClick={handledecrease}>-</button>
    </div>
  );
}

export default Counter;
