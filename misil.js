
function Misil (numberId) {
    this.posMisilX = $('.air').position().left + 100;
    this.posMisilY = $('.air').position().top + 40;
    this.createMisil(numberId);
    this.numberId = 0;
    this.collision();
    this.collisionTrue = false;
  }



Misil.prototype.createMisil = function (numberId) {
  console.log(this.posMisilY, this.posMisilX);
  var newMisil = $('<div>').addClass('misil').attr('id', 'misil' +
  numberId).css({
    top: this.posMisilY, left:this.posMisilX
  }).animate({
    "left": "+=1230"}, 3000, "linear");
  $('#board').append(newMisil);

   if(this.collision){
    // $('#misil'+numberId).remove();
    // $('#obstacle'+obstacleNumber).remove();
   }
};


Misil.prototype.collision = function () {
  checkMisilCollision();
};

function checkMisilCollision() {
  if($(".misil").collision(".obstacles").length>0){
    this.collisionTrue=true;
      console.log("PUUUUUMMMM");
  }
}

function launchMisil (e){
  return e.keyCode === 77;
}


/*
Misil.prototype.removeMisil= function () {

};
*/
