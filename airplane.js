function Airplane(x, y, misilNumber) {
  this.speedY = 10;
  this.planePosX = x;
  this.planePosY = y;
  this.misilId = 0;
}
/*We create functions for the keys we will use to move the plane and also a
function that limits the board
*/
var leftDown = {
  40: false,
  37: false,
};

$(document).keydown(function(e) {
  var planePosY = $('.air').position().top;
  var planePosX = $('.air').position().left;
  var speedY = 10;
  var speedX = 10;
  if (e.keyCode in leftDown) {
    leftDown[e.keyCode] = true;
    if (leftDown[37] && leftDown[40] && downTheLimit(planePosY) &&
    rightOfTheLimit(planePosX)) {
      $('.air').css({
        top: planePosY += (speedY / 2),
        left: planePosX -= (speedX / 2),
      });
    }
  }
}).keyup(function(e) {
  if (e.keyCode in leftDown) {
    leftDown[e.keyCode] = false;
  }
});

var leftUp = {
  38: false,
  37: false,
};
$(document).keydown(function(e) {
  var planePosY = $('.air').position().top;
  var planePosX = $('.air').position().left;
  var speedY = 10;
  var speedX = 10;
  if (e.keyCode in leftUp) {
    leftUp[e.keyCode] = true;
    if (leftUp[37] && leftUp[38] && upperTheLimit(planePosY) &&
    rightOfTheLimit(planePosX)) {
      $('.air').css({
        top: planePosY -= (speedY / 2),
        left: planePosX -= (speedX / 2),
      });
    }
  }
}).keyup(function(e) {
  if (e.keyCode in leftUp) {
    leftUp[e.keyCode] = false;
  }
});

var rightUp = {
  39: false,
  38: false,
};
$(document).keydown(function(e) {
  var planePosY = $('.air').position().top;
  var planePosX = $('.air').position().left;
  var speedY = 10;
  var speedX = 10;
  if (e.keyCode in rightUp) {
    rightUp[e.keyCode] = true;
    if (rightUp[39] && rightUp[38] && upperTheLimit(planePosY) &&
    leftOfTheLimit(planePosX)) {
      $('.air').css({
        top: planePosY -= (speedY / 2),
        left: planePosX += (speedX / 2),
      });
    }
  }
}).keyup(function(e) {
  if (e.keyCode in rightUp) {
    rightUp[e.keyCode] = false;
  }
});

var rightDown = {
  40: false,
  39: false,
};
$(document).keydown(function(e) {
  var planePosY = $('.air').position().top;
  var planePosX = $('.air').position().left;
  var speedY = 10;
  var speedX = 10;
  if (e.keyCode in rightDown) {
    rightDown[e.keyCode] = true;
    if (rightDown[39] && rightDown[40] && downTheLimit(planePosY) &&
    leftOfTheLimit(planePosX)) {
      $('.air').css({
        top: planePosY += (speedY / 2),
        left: planePosX += (speedX / 2),
      });
    }
  }
}).keyup(function(e) {
  if (e.keyCode in rightDown) {
    rightDown[e.keyCode] = false;
  }
});


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
  var speedY = 20;
  var speedX = 30;
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
