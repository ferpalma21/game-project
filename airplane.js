function Airplane(x, y){
  this.speedY = 10;
  this.planePosX = x;
  this.planePosY = y;
}

function arrowDown(e){
  return e.keycode === 40;
}

function arrowUp(e){
  return e.keycode === 38;
}

function arrowLeft(e){
  return e.keycode === 37;
}

function arrowRight(e){
  return e.keycode === 39;
}

function downTheLimit(planePosY){
  return planePosY < board.limitTop;
}

function upperTheLimit(planePosY){
  return planePosY > board.limitBottom;
}

function rightOfTheLimit(planePosX){
  return planePosX > board.limitLeft;
}

function leftOfTheLimit(planePosX){
  return planePosX < (board.limitRight/2);
}


$(document).keydown(function(event){
    var planePosY = $('.air').position().top;
    var planePosX = $('.air').position().left;
    var speedY = 10;
    var speedX = 10;

    if( arrowDown(event) && downTheLimit(planePosY) ){
      $('.air').css({top: planePosY += speedY});
    }else if(arrowUp(event) && upperTheLimit(planePosY)){
      $('.air').css({top: planePosY -= speedY});
    }else if(arrowRight(event) && leftOfTheLimit(planePosX)){
      $('.air').css({left: planePosX += speedX});
    }else if (arrowLeft(event) && rightOfTheLimit(planePosX)) {
      $('.air').css({left: planePosX -= speedX});
    }
});



Airplane.prototype.fire = function(){

};
