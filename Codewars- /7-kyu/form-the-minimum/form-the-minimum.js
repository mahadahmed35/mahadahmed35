function minValue(values){
  //your code here
  const noDb = new Set(values);
  const myArray = Array.from(noDb)
  
return Number(  myArray.sort((a,b)=> a -b).join('')
  )
  
};
​
​
console.log(minValue([1,9,3,1,7,4,6,6,7]));