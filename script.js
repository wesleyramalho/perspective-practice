(function() {
  //initializing container and card variables
  let container = document.getElementById("container");
  let card = document.getElementById("card");
  let helper = document.getElementById("helper");

  //mouse object position handler
  let mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function(event) {
      let e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function(e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function() {
      return "(" + this.x + ", " + this.y + ")";
    }
  };
  mouse.setOrigin(container);

  //is it time to update?
  let counter = 0;
  let updateRate = 10;
  let isTimeToUpdate = function() {
    return counter++ % updateRate === 0;
  };

  //mouse event handlers
  let onMouseEnterHandler = function(event) {
    //Not showing helper
    //helper.className = "";
    update(event);
  };

  let onMouseLeaveHandler = function(event) {
    card.style = "";
    helper.className = "hidden";
  };

  let onMouseMoveHandler = function(event) {
    if (isTimeToUpdate()) {
      update(event);
    }
    displayMousePositionHelper(event);
  };

  let update = function(event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / card.offsetHeight / 2).toFixed(2),
      (mouse.x / card.offsetWidth / 2).toFixed(2)
    );
  };

  let updateTransformStyle = function(x, y) {
    let style = "rotateX(" + x + "deg) rotateY(" + y + "deg )";
    card.style.transform = style;
    card.style.webkitTransform = style;
    card.style.mozTransform = style;
    card.style.msTransform = style;
    card.style.oTransform = style;
  };

  let displayMousePositionHelper = function(event) {
    let e = event || window.event;
    //Not showing helper
    // helper.innerHTML = mouse.show();
    helper.style =
      "top:" +
      (e.clientY - container.offsetTop) +
      "px;" +
      "left:" +
      (e.clientX - container.offsetLeft) +
      "px;";
  };

  //assigning mouse events to container
  container.onmouseenter = onMouseEnterHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmousemove = onMouseMoveHandler;
})();
