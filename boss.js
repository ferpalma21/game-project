
//An object of the boss
function Boss(x,y,speed) {
  this.boss = ['level1', 'level2', 'level3', 'level4'];
  this.bossPosX = x;
  this.bossPosY = y;
  this.speed = speed;
}

//Declaring a function that automates the Boss to move!!! Still Pending
Boss.prototype.move = function() {
  if (this.bossPosX === limitLeft) {
    this.obsPosX += this.speed;
  } else if (this.bossPosY === limitRight){
    this.obsPosX -= this.speed;
  }
};
