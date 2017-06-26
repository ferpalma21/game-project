function Airplane(){
  this._height = height;
}


Airplane.prototype.moveUp = function(){
  height = $('#airplane').position().top;
};


Airplane.prototype.moveDown = function(){
  height = $('#airplane').position().top;
};


Airplane.prototype.fire = function(){

};

/*
$(document).ready(function(){
    $(document).keydown(function(e))
});*/
