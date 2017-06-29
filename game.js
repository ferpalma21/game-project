var board = new Board(0, 1000, 0, 450);

function Game() {
  this.gameObstacles = [];
  this.obstacleId = 0;
  this.addObstacles();
  this.moveObstacles();
  this.intervalObstacleCreation;
  this.misilId = 0;
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
      var leftPos = $('#' + obstacleId).position().left;
      $('#' + obstacleId).css({
        left: leftPos -= speed
      });
    }
    if (checkAirplaneCollision()) {
      clearInterval(intervalMoveObsta);
      clearInterval(that.intervalObstacleCreation);
      alert("STOP");
    }
},150);
};

function checkAirplaneCollision() {
  if($(".air").collision(".obstacles").length>0){
      console.log("WOW");
      return true;
  }
}




$(document).ready(function() {
  var airplane = new Airplane(10, 10);
  var boss = new Boss(450, 0, 20);

  $(document).keydown(function(event) {
    game.misilId++;
    if (launchMisil(event)){
      misil = new Misil(game.misilId);
    }
  });

});


var game = new Game();
