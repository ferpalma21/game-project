function Airplane(x, y, misilNumber) {
  this.speedY = 10;
  this.planePosX = x;
  this.planePosY = y;
  this.directionX = 0;
  this.directionY = 0;
  this.speed = 10;
  this.misilId = 0;
  //Calling (creating) the key board

}


Airplane.prototype.move = function (){
  this.planePosX += this.speed * this.directionX;
  this.planePosY += this.speed * this.directionY;
  this.airplane.css({top: this.planePosY, left: this.planePosX});
};

Airplane.prototype.keyboardEventDown = function(e){
  if (this.keyboard.arrowUp(e)) {
    this.directionY = -1;
  }
  if (this.keyboard.arrowDown(e)) {
    this.directionY = 1;
  }
  if (this.keyboard.arrowLeft(e)) {
    this.directionX = -1;
  }
  if (this.keyboard.arrowRight(e)) {
    this.directionX = 1;
  }
};

Airplane.prototype.keyboardEventUp = function(e){
  if (this.keyboard.arrowUp(e)) {
    this.directionY = 0;
  }
  if (this.keyboard.arrowDown(e)) {
    this.directionY = 0;
  }
  if (this.keyboard.arrowLeft(e)) {
    this.directionX = 0;
  }
  if (this.keyboard.arrowRight(e)) {
    this.directionX = 0;
  }
};
