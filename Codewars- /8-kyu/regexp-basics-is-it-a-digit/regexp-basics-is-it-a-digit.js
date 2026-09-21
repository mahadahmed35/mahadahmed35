String.prototype.digit = function() {
  if(this.length === 1 && this >="0" && this<="9"){
    return true;
  }else{
    return false;
  }
};