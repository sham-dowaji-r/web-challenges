console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  // Exercise: Append a new entry to the toast messages container

  const toastMessage = document.createElement("li");
  toastMessage.textContent = "New toast message!";
  toastMessage.classList.add("toast-container__message");
  toastContainer.append(toastMessage);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.textContent = "";
});
