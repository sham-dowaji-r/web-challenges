import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "🍌 Banana", color: "yellow" },
    { id: 2, name: "🍎 Apple", color: "red" },
    { id: 3, name: "🍊 Orange", color: "orange" },
    { id: 4, name: "🍉 Watermelon", color: "green" },
    { id: 5, name: "🍇 Grapes", color: "purple" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} text={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
