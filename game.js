
var airplane = new Airplane(10, 10);
var board = new Board(0, 1000, 0, 600);
var boss = new Boss(450, 0, 20);

function Game() {
  this.gameObstacles = [];
  this.obstacleId = 0;
  this.addObstacles();
  this.moveObstacles();
}

Game.prototype.addObstacles = function() {
  var that = this;
  var interval = setInterval(function () {
    that.obstacleId++;
    var obstacles = new Obstacles(0, 0, 0, that.obstacleId);
  }, 3000);
};

Game.prototype.removeObstacle = function() {
  this.gameObstacle.shift();
};

Game.prototype.moveObstacles = function() {
    var intervalMoveObsta = setInterval(function () {
    var obstacleArray = $('.obstacles');
    var speed = 10;
    for(i = 0; i < obstacleArray.length; i++){
      var obstacleId = obstacleArray[i].id;
      var leftPos = $('#'+obstacleId).position().left;
      $('#'+obstacleId).css({left:leftPos-=speed});
      }
    }, 300);
};







var game = new Game();
