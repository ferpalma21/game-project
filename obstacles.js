//Declaring the obstacle object, with all the properties
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
  return Math.floor(Math.random()*450);
};

Obstacles.prototype.createObstacle = function (obstacleNumber) {
  // The 100% of the screen
  var width = $(window).width();
  /*Declaring the new obstacle by adding a class (addClass) an attribute (attr)
  inside the attribute we declare the name of the id and add a variable (number) */
  var newObstacle = $('<div>').addClass('obstacles').attr('id', 'obstacle' +
  obstacleNumber).css({top: this.obsPosY, left: width-50}).animate({
    "left": "0"}, 5000, "linear");
  //We create the obstacle by adding this div class to the obstacle
  $('#board').append(newObstacle);
};
