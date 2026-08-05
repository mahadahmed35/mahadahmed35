function sum(a,b) {
 if(b !== undefined){
   return a + b;
 }
  return function(nextArg){
    return a + nextArg;
  }
}
​
​