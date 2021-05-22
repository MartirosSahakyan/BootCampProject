function Calculator() {
  this.add = function (num1, num2) {
    return num1 + num2;
  };
  this.substacrt = function (num1, num2) {
    return num1 - num2;
  };
  this.multiply = function (num1, num2) {
    return num1 * num2;
  };
  this.divide = function (num1, num2) {
    return num1 / num2;
  };
}

const calculator = new Calculator();

console.log(calculator.add(10, 5));
console.log(calculator.substacrt(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));
