const form = document.querySelector(".demo-form");
const depthInput = document.querySelector("#search-depth");
const depthOutput = document.querySelector("#depth-value");
const feedback = document.querySelector("#form-feedback");

depthInput.addEventListener("input", () => {
  depthOutput.value = depthInput.value;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  feedback.textContent = "Výprava naplánována! (Ukázková data se nikam neodeslala.)";
});

form.addEventListener("reset", () => {
  feedback.textContent = "";
  window.setTimeout(() => {
    depthOutput.value = depthInput.value;
  }, 0);
});
