function Keyboard (){
  this.arrowDown = 40;
  this.arrowUp = 38;
  this.arrowLeft = 37;
  this.arrowRight = 39;
}

Keyboard.prototype.arrowDown = function (e) {
  return this.arrowDown === e.keyCode;
};

Keyboard.prototype.arrowUp = function (e) {
  return this.arrowUp === e.keyCode;
};

Keyboard.prototype.arrowLeft = function (e) {
  return this.arrowLeft === e.keyCode;
};

Keyboard.prototype.arrowRight = function (e) {
  return this.arrowRight === e.keyCode;
};
