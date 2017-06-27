function Boss(x,y,speed) {
  this.boss = ['level1', 'level2', 'level3', 'level4'];
  this.bossPosX = x;
  this.bossPosY = y;
  this.speed = speed;
}

Boss.prototype.move = function() {
  if (this.bossPosX === limitLeft) {
    this.obsPosX += this.speed;
  } else if (this.bossPosY === limitRight){
    this.obsPosX -= this.speed;
  }
};
