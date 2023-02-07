import React, { useState } from "react";

const data = ["red", "yellow", "green"];

const Shape = () => {
  const [index, setIndex] = useState(0);

  const handleChange = () => {
    if (index === 2) return setIndex(0);
    setIndex(index + 1);
  };

  return (
    <div>
      <button onClick={handleChange}>Change shape</button>
      <div
        style={{
          width: 200,
          height: 200,
          background: data[index],

          borderRadius: "50%",
        }}
      ></div>
    </div>
  );
};

export default Shape;

//boolean : true and false
