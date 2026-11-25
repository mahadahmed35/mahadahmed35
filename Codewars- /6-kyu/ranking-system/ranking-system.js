function rankings(arr){
  const sorted = arr.slice();
  sorted.sort((a, b)=> b-a);
  const result = arr.map((number)=> {
    const index = sorted.indexOf(number);
    
    return index + 1
    
  })
  return result;
}