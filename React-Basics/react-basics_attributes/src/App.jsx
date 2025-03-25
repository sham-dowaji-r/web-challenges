import "./styles.css";

export default function App() {
  return <Article />;
}

export function Article() {
  return (
    <article className="article">
      <h2 className="article__title">IT IS WIKIPEDIA</h2>
      <label htmlFor="input">Search</label>
      <input name="input" id="input"></input>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Wikipedia:Hauptseite"
      >
        Click Here To Go To Wikibedia
      </a>
    </article>
  );
}
