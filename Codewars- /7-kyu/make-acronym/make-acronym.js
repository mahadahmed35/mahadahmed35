function toAcronym(inp){
  // ...
  return inp.split(' ').map(inp=> inp[0].toUpperCase() && inp[0].toUpperCase()).join('');
}