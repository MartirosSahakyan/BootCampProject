function sum(a, b) {
  return a + b;
}
console.log(sum(40, 2));

function readNumber(userInput) {
  if (isNaN(Number(userInput)) || userInput === null || userInput === "") {
    return null;
  }
  return userInput;
}
console.log(readNumber(1.5));
console.log(readNumber(""));
console.log(readNumber("string"));

function random(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(random(3, 8));


function randomInteger(min, max) {
    return min + Math.round(Math.random()*(max-min))    
}
console.log(randomInteger(3,8));