import React, { useReducer, useState } from "react";
import { GiHamburger } from "react-icons/gi";
import { RiDrinksFill } from "react-icons/ri";
import { GiFrenchFries } from "react-icons/gi";
import "./App.css";

const UseReducerPratice = () => {
  const initialState = { count: 0, name: " " };
  const [state, dispatch] = useReducer(countReducer, initialState);

  function countReducer(state, action) {
    switch (action.type) {
      case "HAM": {
        return { count: state.count + 8000, name: "햄버거" };
      }
      case "FRI": {
        return { count: state.count + 4000, name: "감자튀김" };
      }
      case "COL": {
        return { count: state.count + 2000, name: "콜라" };
      }
      default: {
        alert("판매하지 않는 메뉴입니다.");
        return state;
      }
    }
  }

  return (
    <div id="main">
      <h1>🌸 꽃잎 햄버거 가게🌸 </h1>
      <h1>선택 메뉴 : {state.name} </h1>
      <h1>지불 할 금액: {state.count} </h1>
      <div>
        <button onClick={() => dispatch({ type: "HAM" })}>
          <GiHamburger style={{ width: "50px", height: "50px" }} />
        </button>
        <button onClick={() => dispatch({ type: "FRI" })}>
          <GiFrenchFries style={{ width: "50px", height: "50px" }} />
        </button>
        <button onClick={() => dispatch({ type: "COL" })}>
          <RiDrinksFill style={{ width: "50px", height: "50px" }} />
        </button>
      </div>
    </div>
  );
};

export default UseReducerPratice;
