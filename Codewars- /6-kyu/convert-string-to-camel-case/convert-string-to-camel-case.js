function toCamelCase(str){
​
  // Matches a dash or underscore followed by any word character globally
  return str.replace(/[-_](\w)/g, (_, match) => match.toUpperCase());
​
​
}