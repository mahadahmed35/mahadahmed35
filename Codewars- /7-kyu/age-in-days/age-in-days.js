function ageInDays(year, month, day){
  //Your Magnificent Code here
  // Note that month == 1 means January (in contrast to JavaScripts Date where the month is zero based)
  let today = new Date()
let birthDate = new Date(year, month - 1, day)
​
let difference = today - birthDate
let days = Math.floor(difference / (1000 * 60 * 60 * 24))
  return "You are " + days +" days old";
​
}
​
console.log(ageInDays(2005, 4, 1))