import { renderElement } from "./utils.js";

console.clear();

const url = "https://swapi.dev/api/people/";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  console.log(data.count);

  console.log(data.results[0].name);

  console.log(data.results[5].mass);

  const eyeColor = data.results.find(
    (charachter) => charachter.name === "R2-D2"
  );
  console.log(eyeColor.eye_color);
}

fetchData();
