import "./Card.css";

export default function Card({ text, color }) {
  return (
    <p className="card" style={{ background: color }}>
      {text}
    </p>
  );
}
