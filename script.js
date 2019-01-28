let container = document.getElementById("container");
let card = document.getElementById("card");

let onMouseEnterHandler = function(event) {
  console.log("enter");
  update(event);
};

let onMouseLeaveHandler = function(event) {
  console.log("leave");
  card.style = "";
};

let onMouseMoveHandler = function(event) {
  console.log("move");
  if (isTimeToUpdate()) {
    update(event);
  }
};

container.onmouseenter = onMouseEnterHandler;
container.onmouseleave = onMouseLeaveHandler;
container.onmousemove = onMouseMoveHandler;
