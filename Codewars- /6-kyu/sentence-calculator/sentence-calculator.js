function lettersToNumbers(s) {
  // your code......
  let total = 0;
  
  for(let letter of s){
    let code = letter.charCodeAt(0);
    if(code >= 97 && code <=122){
      total += code -96
    }else if (code >= 65 && code <= 90){
      total += (code - 64)* 2;
    }
    else if(code >= 48 && code <=57){
     total += Number(letter)
    } else{
      total +=0;
    }
  }
  return total;
}