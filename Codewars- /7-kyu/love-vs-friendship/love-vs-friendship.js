function wordsToMarks(string){
  //your code here
  let total = 0;
  
  for(let letter of string){
    total += letter.charCodeAt(0)-96 ;
    letter.charCodeAt(0) - 96;
  }
  
  return total;
}