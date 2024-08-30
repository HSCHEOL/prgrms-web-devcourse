import React, { useState } from "react";
import ChildComponent from "./components/ChildComponent";

const App = () => {
  const [Totalcount, setTotalcount] = useState(0);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Total Count : {Totalcount}</h1>
      <div style={{ display: "flex" }}>
        <ChildComponent setTotalcount={setTotalcount} />
        <ChildComponent setTotalcount={setTotalcount} />
      </div>
    </div>
  );
};

export default App;
