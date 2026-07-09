function tripleTrouble(one, two, three){
  //Solution
  let x='';
  for( let i=0; i<one.length; i++) {
    x +=one[i] + two[i] + three[i];
  }
  return x;
 }
console.log(tripleTrouble("aa", "bb", "cc",));