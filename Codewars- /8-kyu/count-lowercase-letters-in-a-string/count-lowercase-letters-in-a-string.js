function lowercaseCount(str){
    //How many?
  let count = 0;
  for(let char of str){
    if(char >= 'a' && char <= 'z')
      count++
  }
  return count;
}