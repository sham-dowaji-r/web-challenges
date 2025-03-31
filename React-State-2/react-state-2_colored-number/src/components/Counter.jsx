import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementHandle() {
    setCount((prevcount) => prevcount + 1);
  }

  function decrementHandle() {
    setCount((prevcount) => prevcount - 1);
  }
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={incrementHandle}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={decrementHandle}
        >
          -
        </button>
      </div>
    </div>
  );
}
