function Airplane(){
  this._height = height;
  this._speedY = 10;
  this.planePos = $('#plane').position().top;
}


Airplane.prototype.moveUp = function(){
  $(document).keydown(function(event){
    if(event.keycode === 40 && this._height>limitYTop){
      $('.air').css({top: this.planePos += this.speedY});
    }else{
      return "DEAD";
    }
  });
};


Airplane.prototype.moveDown = function(){
  $(document).keydown(function(event){
    if(event.keydown === 38 && this._height<limitYBottom){
        $('.air').css({top: this.planePos -= this.speedY});
      }else{
        return "DEAD";
      }
  });
};


Airplane.prototype.fire = function(){

};

/*
$(document).ready(function(){
    $(document).keydown(function(e))
});*/
