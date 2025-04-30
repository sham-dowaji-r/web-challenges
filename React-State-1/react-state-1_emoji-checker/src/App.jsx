import { useState } from "react";
import "./styles.css";

export default function App() {
  //let code = "?";
  const [code, setCode] = useState("");

  const validCode = "🐡🐠🐋";

  function handleClick(emoji) {
    //console.log(emoji);
    //console.log(code);
    setCode((code) => code + emoji);
  }
  function handleReset() {
    setCode("");
  }
  return (
    <div className="container">
      <p>{code}</p>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
      </div>

      <button type="button" onClick={handleReset}>
        Reset
      </button>

      {code === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}
