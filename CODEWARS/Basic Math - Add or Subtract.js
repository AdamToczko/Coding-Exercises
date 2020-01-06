// Basic Math (Add or Subtract)

// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

function calculate(str) {
  
let plus  = /plus/gi;
let minus = /minus/gi;
let replaceOperators = str.replace(plus, '+').replace(minus, '-');

return String(eval(replaceOperators))

}