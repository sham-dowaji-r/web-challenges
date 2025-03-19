// --^-- your code here --^--
export function Card(person) {
  const card = document.createElement("article"); // Create a new article Element
  card.classList.add("card"); // Add the class 'card'

  // Fill the article element with content.
  const heading = document.createElement("h2");
  heading.textContent = person.name;

  card.append(heading);

  const eyeColor = document.createElement("p");
  eyeColor.textContent = `Eye color: ${person.eye_color}`;

  card.append(eyeColor);

  const birthYear = document.createElement("p");
  birthYear.textContent = `Birth Year: ${person.birth_year}`;

  card.append(birthYear);

  return card;
}
