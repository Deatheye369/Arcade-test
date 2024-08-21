arrows = document.querySelectorAll(".arrow");

const handleClick = (event) => {
  const direction = event.target.getAttribute("id");
  switch (direction) {
    case "ArrowUp":
      console.log("up");
      break;
    case "ArrowDown":
      console.log("down");
      break;
    case "ArrowLeft":
      console.log("left");
      break;
    case "ArrowRight":
      console.log("right");
      break;
  }
};

arrows.forEach((arrow) => {
  arrow.addEventListener("click", handleClick);
});
