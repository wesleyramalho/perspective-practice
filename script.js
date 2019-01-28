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
      console.log(this);
      return "(" + this.x + ", " + this.y + ")";
    }
  };
  mouse.setOrigin(container);

  //is it time to update?
  let counter = 0;
  let updateRate = 1;
  let isTimeToUpdate = function() {
    return counter++ % updateRate === 0;
  };

  //mouse event handlers
  let onMouseEnterHandler = function(event) {
    helper.className = "";
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
  };

  let displayMousePositionHelper = function(event) {
    let e = event || window.event;
    helper.innerHTML = mouse.show();
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
