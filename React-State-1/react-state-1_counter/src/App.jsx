import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  function handleClickIncrement() {
    setCount(count + 1);
  }
  function handleClickDecrement() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={handleClickDecrement}>
          -
        </button>
        <button type="button" onClick={handleClickIncrement}>
          +
        </button>
      </div>
    </div>
  );
}
