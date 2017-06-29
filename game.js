var board = new Board(0, 1000, 0, 500);

function Game() {
  this.gameObstacles = [];
  this.obstacleId = 0;
  this.addObstacles();
  this.moveObstacles();
  this.intervalObstacleCreation;
  //this.removeObstacle();
}

Game.prototype.addObstacles = function() {
  var that = this;
  this.intervalObstacleCreation = setInterval(function() {
    that.obstacleId++;
    var obstacles = new Obstacles(0, 0, 0, that.obstacleId);
  }, 3 * 1000);
};

// Game.prototype.removeObstacle = function() {
//   if ($('.obstacles').position().left <= 0){
//     $('obstacles').unshift();
//   }
// };

Game.prototype.moveObstacles = function() {
  that = this;
  var intervalMoveObsta = setInterval(function() {
    var obstacleArray = $('.obstacles');
    var speed = 20;
    for (i = 0; i < obstacleArray.length; i++) {
      var obstacleId = obstacleArray[i].id;
      if (that.crash(obstacleId)) {
        clearInterval(intervalMoveObsta);
        clearInterval(that.intervalObstacleCreation);
        alert("STOP");
      }
      var leftPos = $('#' + obstacleId).position().left;
      $('#' + obstacleId).css({
        left: leftPos -= speed
      });
    }
  }, 150);
};

Game.prototype.crash = function(obstacleId) {
  var planePosY = $('.air').position().top;
  var planePosX = $('.air').position().left;
  var planeWidth = $('.air').width();
  var planeHeight = $('.air').height();
  var obsLeftPos = $('#' + obstacleId).position().left;
  var obsHeightPos = $('#' + obstacleId).position().top;
  if (planePosY > obsHeightPos - 40 && planePosY + planeHeight < obsHeightPos + 90 &&
    planePosX < obsLeftPos + 50 && planePosX + planeWidth > obsLeftPos - 5){
    return true;
  }
};



$(document).ready(function() {
  var airplane = new Airplane(10, 10);
  var boss = new Boss(450, 0, 20);
  var misil = new Misil();
  misil.createMisil();

});


var game = new Game();
