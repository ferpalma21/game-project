function Misil () {
    this.posMisilX = $('.air').position().left + 100;
    this.posMisilY = $('.air').position().top + 40;
  }

Misil.prototype.fire = function () {
  this.createMisil();
  this.moveMisil();
};

Misil.prototype.createMisil = function () {
  console.log(this.posMisilY, this.posMisilX);
  var newMisil = $('<div>').addClass('misil').attr('id', 'misil').css({top: this.posMisilY, left:this.posMisilX});
  $('#board').append(newMisil);
  this.moveMisil();
};


Misil.prototype.moveMisil = function () {
  var intervalMoveMisil = setInterval(function () {
  var misilArray = $('.misil');
  var speed = 5;
  for (var i = 0; i < misilArray.length ; i++){
      var misilId = misilArray[i].id;
      var leftPos = $('#'+misilId).position().left;
      $('#'+misilId).css({left: leftPos += speed });
      checkCollision();
  }}, 100);
};

function checkCollision() {
  if($(".misil").collision(".obstacles").length>0){
      console.log("PUUUUUMMMM");
  }
}


/*
Misil.prototype.removeMisil= function () {

};
*/
