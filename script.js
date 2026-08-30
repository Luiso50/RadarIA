const form = document.querySelector(".signup-form");
const successMessage = document.querySelector("#form-success");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.reset();
  successMessage.hidden = false;
});
