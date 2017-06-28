function Airplane(x, y) {
  this.speedY = 10;
  this.planePosX = x;
  this.planePosY = y;
  this.misilId = 0;
}
/*We create functions for the keys we will use to move the plane and also a
function that limits the board
*/
function arrowDown(e) {
  return e.keyCode === 40;
}
function arrowUp(e) {
  return e.keyCode === 38;
}
function arrowLeft(e) {
  return e.keyCode === 37;
}
function arrowRight(e) {
  return e.keyCode === 39;
}
function rightDown(e) {
  return e.keyCode === 39 && e.keyCode === 40;
}
function rightUp(e) {
  return e.keyCode === 39 && e.keyCode === 38;
}
function leftDown(e) {
  return e.keyCode === 37 && e.keyCode === 40;
}
function leftUp(e) {
  return e.keyCode === 
}
function downTheLimit(planePosY) {
  return planePosY < board.limitBottom;
}
function upperTheLimit(planePosY) {
  return planePosY > board.limitTop;
}
function rightOfTheLimit(planePosX) {
  return planePosX > board.limitLeft;
}
/*Limit to the right is cut by half so the plane can't move after the first half
of the screen*/
function leftOfTheLimit(planePosX) {
  return planePosX < (board.limitRight / 2);
}


//A jquery event/function to move the plane
$(document).keydown(function(event) {
  var planePosY = $('.air').position().top;
  var planePosX = $('.air').position().left;
  var speedY = 10;
  var speedX = 10;

  if (arrowDown(event) && downTheLimit(planePosY)) {
    $('.air').css({
      top: planePosY += speedY
    });
  } else if (arrowUp(event) && upperTheLimit(planePosY)) {
    $('.air').css({
      top: planePosY -= speedY
    });
  } else if (arrowRight(event) && leftOfTheLimit(planePosX)) {
    $('.air').css({
      left: planePosX += speedX
    });
  } else if (arrowLeft(event) && rightOfTheLimit(planePosX)) {
    $('.air').css({
      left: planePosX -= speedX
    });
  }
});


/*
Airplane.prototype.fire = function (misilNumber) {
  this.createMisil(misilNumber);
  this.addMisil();
  this.moveMisil();
};

Airplane.prototype.createMisil = function (misilNumber) {
  var misilOnX =  $('.air').position().left;
  var misilOnY = $('.air').position().top;
  var newMisil = $('<div>').addClass('misil').attr('id', 'misil' +
  misilNumber).css({top:misilOnY, left:misilOnY});
  $('#board').append(newMisil);
};

Airplane.prototype.addMisil = function () {

};

Airplane.prototype.moveMisil = function () {
  var intervalMoveMisil = setInterval(function () {
  var misilArray = $('.misil');
  var speed = 25;
  for (var i = 0; i < misilArray.length ; i++){
      var misilId = misilArray[i].id;
      var leftPos = $('#'+misilId).position().left;
      return $('#'+misilId).css({left: leftPos += speed });
  }}, 500);
};

Airplane.prototype.removeMisil= function () {

};
*/
