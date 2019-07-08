// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  const toBeChanged = document.querySelector("p")
  toBeChanged.textContent = "This is really cool!"
});
