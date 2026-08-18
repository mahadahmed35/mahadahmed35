function rotations(dieArray) {
  let min = Infinity;
  for(let target = 1; target <= 6; target++){
    let total = 0;
    for( let die of dieArray){
    if(die === target){
      total +=0;
    }else if (die + target === 7){
      total +=2;
    }else {
      total += 1;
    }
  }
    if(total < min){
      min = total;
    }
}
  return min;
    }