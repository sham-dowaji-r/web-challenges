import { useState } from "react";
import "./styles.css";

export default function App() {
  // let isActive = false;
  //We should replace the `let` variable with the `useState` function and Set the initial state value to `false`.
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    //isActive = !isActive;
    //We should use the `set` function from `useState` to update the value of the `isActive` state.

    setIsActive(!isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}
