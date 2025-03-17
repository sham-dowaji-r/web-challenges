console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  non: "Select",
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write or modify code below this line --v--
for (let languag in languages) {
  const option = document.createElement("option");
  option.textContent = languages[languag];
  option.value = languag;
  select.append(option);
}
// --^-- write or modify code above this line --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write or modify code below this line --v--
for (let aElement in nav) {
  const liElement = document.createElement("li");
  const achorTag = document.createElement("a");
  achorTag.href = nav[aElement].href;
  achorTag.textContent = nav[aElement].text;

  ul.append(liElement);
  liElement.append(achorTag);
}

// --^-- write or modify code above this line --^--
