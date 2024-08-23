arrows = document.querySelectorAll(".arrow");
keepMoving = null;

const stopMove = (event) => {
  const direction = event.target.getAttribute("id") || event.key;
  clearInterval(keepMoving);
  keepMoving = null;
  document.getElementById(direction).classList.remove("pressed");
};

function handleClick(event) {
  const direction = event.target.getAttribute("id") || event.key;
  if (!event.reapeat) {
    keepMoving = setInterval(() => {
      displayResult(direction);
    }, 150);
  }
  document.getElementById(direction).classList.add("pressed");
}

displayResult = (direction) => {
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
