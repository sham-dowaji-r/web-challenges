import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(2);

  function incrementHandle() {
    setPeople((prevPeople) => prevPeople + 1);
  }
  function decrementHandle() {
    setPeople((prevPeople) => Math.max(prevPeople - 1, 2));
  }
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        incrementHandle={incrementHandle}
        decrementHandle={decrementHandle}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
