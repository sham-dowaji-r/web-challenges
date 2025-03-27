export default function App() {
  return (
    <>
      {" "}
      <Smiley isHappy /> <Smiley /> <Smiley isHappy /> <Smiley />
    </>
  );
}
function Smiley({ isHappy }) {
  return <span>{isHappy ? "😁" : "😔"}</span>;
}
