function initializeNames(name){
  // Insert your brilliant code here
let parts = name.split(" ");
  for(let i=1; i<parts.length-1; i++){
  parts[i]=parts[i][0] + "." 
  }
    return parts.join(" ")
}