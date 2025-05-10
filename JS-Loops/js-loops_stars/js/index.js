console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (let star = 1; star <= 5; star++) {
    const imageStar = document.createElement("img");
    imageStar.src =
      star <= filledStars ? `assets/star-filled.svg` : `assets/star-empty.svg`;
    imageStar.addEventListener("click", () => {
      renderStars(star);
    });
    starContainer.append(imageStar);
  }
  // --^-- write or modify code above this line --^--
}

renderStars(0);
