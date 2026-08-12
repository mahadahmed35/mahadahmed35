function dnaStrand(dna){
      let result = "";
​
  for(let letter of dna){
    if(letter === "A"){
      result +="T"
    }else if(letter === "T"){
      result += "A"
    }else if(letter === "G"){
      result += "C"
​
    } else if(letter ==="C"){
      result +="G"
    }
      {
      result +="";
    }
  }
  return result
}
​