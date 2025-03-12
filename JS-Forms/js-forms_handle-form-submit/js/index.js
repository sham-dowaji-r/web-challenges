console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;
  const firstName = formElements.firstName.value;
  console.log("WHAT S YOUR NAME???", firstName);

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  event.target.reset();
  formElements.firstName.focus();
});
