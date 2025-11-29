const colorInput = document.getElementById("colorInput");
const textInput = document.getElementById("textInput");
const bgBtn = document.getElementById("bgBtn");
const textBtn = document.getElementById("textBtn");
const myDiv = document.getElementById("myDiv");
function isValidColor(color) {
  const s = new Option().style;
  s.color = color;
  return s.color !== "";
}
bgBtn.addEventListener("click", () => {
  const color = colorInput.value.trim();
  if (isValidColor(color)) {
    myDiv.style.backgroundColor = color;
  } else {
    alert("Invalid color name!");
  }
});
textBtn.addEventListener("click", () => {
  const text = textInput.value.trim();
  if (text === "") {
    alert("Please enter some text!");
  } else {
    myDiv.textContent = text;
  }
});