export default function App() {
  function handleClick() {
    alert("You clicked me!");
  }
  return (
    <>
      <Button color="red" disabled={true} text={"Click me"} height={"200px"} />{" "}
      <Button
        color="green"
        disabled={false}
        text={"Submit"}
        height="100px"
        onClick={handleClick}
      />{" "}
      <Button color="blue" disabled={false} text="Send" height={"250px"} />{" "}
      <Button color="gray" disabled={false} text="Send" />
    </>
  );
}

function Button({ color, disabled, text, height, onClick }) {
  return (
    <button
      style={{ backgroundColor: color, height: height }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
