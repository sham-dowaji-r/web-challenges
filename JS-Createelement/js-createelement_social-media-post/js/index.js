console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const articleElement = document.createElement("article");
articleElement.className = "post";

const pElement = document.createElement("p");
pElement.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
pElement.className = "post__content";

const footerElement = document.createElement("footer");
footerElement.className = "post__footer";

const spanElement = document.createElement("span");
spanElement.textContent = "@username";
spanElement.className = "post__username";

const buttoElement = document.createElement("button");
buttoElement.textContent = "♥ Like";
buttoElement.className = "post__button";
buttoElement.addEventListener("click", handleLikeButtonClick);

articleElement.append(pElement, footerElement);
footerElement.append(spanElement, buttoElement);
document.body.append(articleElement);
