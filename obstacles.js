function Obstacles (x, y, speed, obstacleNumber){
  this.posObsta = ["poc", "easy", "middle", "hard", "xHard"];
  this.random = this.randomObstacle();
  this.obsPosX = x;
  this.obsPosY = this.getRandomY();
  this.speed = speed;
  this.createObstacle(obstacleNumber);
}

Obstacles.prototype.randomObstacle = function (){
  return this.posObsta[Math.floor(Math.random()*this.posObsta.length)];
};

Obstacles.prototype.getRandomY = function () {
  return Math.floor(Math.random()*550);
};

Obstacles.prototype.createObstacle = function (obstacleNumber) {
  var width = $(window).width();
  var newObstacle = $('<div>').addClass('obstacles').attr('id', 'obstacle' +
  obstacleNumber).css({top: this.obsPosY, left: width});
  $('#board').append(newObstacle);
};
