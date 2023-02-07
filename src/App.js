import "./app.css";
import { useState } from "react";
import Count from "./components/Count";
import Shape from "./components/Shape";
import Child from "./components/Child";

function App() {
  return (
    <div>
      <Shape />
    </div>
  );
}

export default App;

//props -> properties :kỹ thuật truyền data từ parent  -> children

//state : dùng để quản lý data trong 1 component ; useState
