const list = document.querySelector("#my-list");
const button = document.getElementById("add-btn");
function styleListItem(li, sequenceNumber) {
  if (sequenceNumber % 2 === 1) {
    li.style.fontWeight = "bold";
    li.style.color = "blue";
  } else {
    li.style.fontStyle = "italic";
    li.style.color = "red";
  }
}
Array.from(list.children).forEach((li, index) => {
  styleListItem(li, index + 1);
});
button.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";

  const sequenceNumber = list.children.length + 1;
  styleListItem(newItem, sequenceNumber);

  list.appendChild(newItem);
});