import React from "react";
import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(1);
  const handleDecrease = () => {
    if (count === -5) return alert("Minium is -5");
    setCount(count - 1);
  };
  const handleIncrease = () => {
    if (count === 10) return alert("Maxium is 10");

    setCount(count + 1);
  };
  return (
    <div className="count">
      <button onClick={handleDecrease} id="btn">
        decrease
      </button>
      <h1>{count}</h1>

      <button onClick={handleIncrease}>increase</button>
    </div>
  );
};

export default Count;
