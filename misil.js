var score = 0;
function Misil (numberId) {
    this.posMisilX = $('.air').position().left + 100;
    this.posMisilY = $('.air').position().top + 40;
    this.createMisil(numberId);
    this.numberId = 0;
    this.collision();
    this.collisionTrue = false;

  }



Misil.prototype.createMisil = function (numberId) {
  var newMisil = $('<div>').addClass('misil').attr('id', 'misil' +
  numberId).css({
    top: this.posMisilY, left:this.posMisilX
  }).animate({
    "left": "+=1230"}, 3000, "linear");
  $('#board').append(newMisil);
  this.removeMisil();
   //if(this.collision){
    // $('#misil'+numberId).remove();
    // $('#obstacle'+obstacleNumber).remove();
   //}
};


Misil.prototype.collision = function () {
  if (checkMisilCollision) {

  }
  checkMisilCollision();

};

function checkMisilCollision() {
  if($(".misil").collision(".obstacles").length>0){
    var xes = $(".misil").collision(".obstacles")["0"].id;
    console.log(xes);
    $("#" + xes).remove();
      console.log("PUUUUUMMMM");
      score++;
      $('#points').text(score);
      if(score === 10){
          $("#win").removeClass("winh");
      }
  }
}

function launchMisil (e){
  return e.keyCode === 77;
}



Misil.prototype.removeMisil= function () {
  var disappearMissil = $('.misil').id;
  if (disappearMissil > $(window).width()){
    $('#' + disappearMissil).remove();
  }
};
