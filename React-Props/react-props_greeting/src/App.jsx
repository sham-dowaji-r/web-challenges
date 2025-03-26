export default function App() {
  function Greeting({ name }) {
    return <h1>{name === "Marcel" ? `Hello, Coach` : `Hallo, ${name}`}</h1>;
  }

  return (
    <>
      <Greeting name={"sham"} />
      <Greeting name={"Marcel"} />
    </>
  );
}
