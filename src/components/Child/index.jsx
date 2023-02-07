import React from "react";

const Child = ({ change }) => {
  console.log(change);
  return (
    <div>
      <h1>{change === true ? "change text update" : "text"}</h1>
    </div>
  );
};

export default Child;
