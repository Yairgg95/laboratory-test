const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}

const divide = function divide(a, b){
  if (b === 0) {
    throw new Error ("Cannot divide by zero")
  }
  return a / b;
}

const multiply = function multiply(a, b){
  return a * b;
}

// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {add, subtract , divide, multiply};