//arrows = document.querySelectorAll(".arrow");
console.log("let me type please");

const handleClick = (event) => {
  const direction = event.target.getAttribute("id");
  console.log(direction);
};

arrows.forEach((arrow) => {
  arrow.addEventListener("click", handleClick);
});
