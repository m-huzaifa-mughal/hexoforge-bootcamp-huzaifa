let box1 = document.getElementById("container1");
let box2 = document.getElementById("container2");
let paragraph = document.getElementById("status");
let heading = document.getElementById("head");
let resetButton = document.querySelector("button");
let mybox = null;

function updateParagraph(message) {
  paragraph.textContent = message;
}

box1.addEventListener("click", function () {
  box1.textContent = "Box 1 is Clicked!";
  box2.textContent = " ";
  updateParagraph("Box 1 is Clicked!");
  mybox = box1;
});

box2.addEventListener("click", function () {
  box2.textContent = "Box 2 is Clicked!";
  box1.textContent = " ";
  updateParagraph("Box 2 is Clicked!");
  mybox = box2;
});

heading.addEventListener("click", function () {
  heading.textContent = "Heading Clicked!";
  updateParagraph("Heading was Clicked!");
});

resetButton.addEventListener("click", function () {
  box1.textContent = " ";
  box2.textContent = " ";
  heading.textContent = "Welcome Here";
  paragraph.textContent = "No box Selected";
});
