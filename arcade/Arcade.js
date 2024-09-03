arrows = document.querySelectorAll(".arrow");

const handleKeyDown = (event) => {
  console.log(event.key);
};

document.addEventListener("keydown", handleKeyDown);

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

//document.addEventListener("keydown", handleClick);
//document.addEventListener("keyup", stopMove);

arrows.forEach((arrow) => {
  arrow.addEventListener("mousedown", handleClick);
  arrow.addEventListener("mouseup", stopMove);
});
