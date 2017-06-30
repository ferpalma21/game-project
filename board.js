//Setting the limits of the board
function Board(limitLeft, limitRight, limitTop, limitBottom){
  this.limitLeft = limitLeft;
  this.limitRight = limitRight;
  this.limitTop = limitTop;
  this.limitBottom = limitBottom;

}

// Board.prototype.move = function () {
//   var speed = 5;
//   var background = $('.background');
//   var frames = 1000;
//   var backgroundX = $('.background').position().left;
//   var backgroundIntervarl = setInterval(function (){
//     for (var i = 0; i < background.length; i++) {
//       var leftPosBack = $(backgroundX).css({left: backgroundX -= speed});
//   }}, 1000);
// };
