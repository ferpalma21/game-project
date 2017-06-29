//Setting the limits of the board
function Board(limitLeft, limitRight, limitTop, limitBottom){
  this.limitLeft = limitLeft;
  this.limitRight = limitRight;
  this.limitTop = limitTop;
  this.limitBottom = limitBottom;
  //this.background = $('.background');
  //this.move();
}

/*Board.prototype.move = function () {
  var speed = 5;
  var time = 10;
  var backgroundX = this.background.position().left;
  for (var i = 0; i < time; i++) {
    $(this.background).css({left: backgroundX -= speed});
  }

};
*/
