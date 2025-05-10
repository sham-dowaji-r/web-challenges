console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write or modify code below this line --v--
for (const languag of programmingLanguages) {
  const liElement = document.createElement("li");
  liElement.textContent = languag;
  liElement.classList.add("ol-item");
  ol.append(liElement);
}

// --^-- write or modify code above this line --^--
