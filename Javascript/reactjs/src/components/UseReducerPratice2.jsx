import React, { useEffect, useReducer, useState } from "react";
import "./App.css";

const App = () => {
  const handlerPrice = (state, action) => {
    switch (action.type) {
      case "입금":
        return state + action.amount;
      case "출금": {
        if (state > action.amount && action.amount > 0) {
          return state - action.amount;
        } else {
          alert("잔액이 부족합니다.");
          return state;
        }
      }
      default:
        return state;
    }
  };

  const [price, dispatch] = useReducer(handlerPrice, 0);
  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    console.log(price);
  }, [price]);

  return (
    <main>
      <h1>금액을 입력하세요.</h1>
      <input
        type="number"
        step="1000"
        style={{ width: "300px", height: "30px" }}
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <h1>입금 또는 출금 버튼을 클릭하세요.</h1>
      <div>
        <button onClick={() => dispatch({ type: "입금", amount: inputValue })}>
          입금
        </button>
        <button onClick={(e) => dispatch({ type: "출금", amount: inputValue })}>
          출금
        </button>
      </div>
      <h1>현재 잔액:{price}</h1>
    </main>
  );
};

export default App;
