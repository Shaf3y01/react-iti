// DOM Reference
let p1 = document.querySelector(".p-1");
let p2 = document.querySelector(".p-2");
function copyText() {
  p2.textContent = p1.textContent;
}

// Function to change paragraph colors to pink
function changeColor() {
  p1.style.backgroundColor = "pink";
  p2.style.backgroundColor = "pink";
}
