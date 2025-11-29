// Select elements from the DOM
const colorInput = document.getElementById("colorInput");
const textInput = document.getElementById("textInput");
const bgBtn = document.getElementById("bgBtn");
const textBtn = document.getElementById("textBtn");
const myDiv = document.getElementById("myDiv");

// Function to validate color names
function isValidColor(color) {
  const s = new Option().style; // Create a temporary style object
  s.color = color;
  return s.color !== ""; // If browser recognizes the color, it won't be empty
}

// Event listener for "Change Background" button
bgBtn.addEventListener("click", () => {
  const color = colorInput.value.trim();
  if (isValidColor(color)) {
    myDiv.style.backgroundColor = color;
  } else {
    alert("Invalid color name!");
  }
});

// Event listener for "Update Text" button
textBtn.addEventListener("click", () => {
  const text = textInput.value.trim();
  if (text === "") {
    alert("Please enter some text!");
  } else {
    myDiv.textContent = text;
  }
});