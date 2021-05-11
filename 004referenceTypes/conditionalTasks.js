// 1.Given a number. Print “odd” if the number is odd and “even” if itʼs even.
function evenOddNumber(num) {
  let result = num % 2 ? "odd" : "even";
  return result;
}
console.log(evenOddNumber(15));

// 2.Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of the angles of a triangle equals 180 degrees).
function triangleAnglesFinder(firstAngle, secondAngle) {
  let result = 180 - +firstAngle - +secondAngle;
  if (!isNaN(result)) {
    return result;
  } else {
    return "insert only numbers";
  }
}
console.log(triangleAnglesFinder('20',60));

//3.Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the last digit of the inserted number is 0, number remains the same.
function lastDigitReverser(num) {
  let fakeArr = num.toString().split("");
  let lastDigit = fakeArr.pop();
  if (lastDigit !== "0") {
    fakeArr.unshift(lastDigit);
    let result = +fakeArr.join("");
    return result;
  } else {
    return num;
  }
}
console.log(lastDigitReverser(1002));

//4.Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
function multiplyDetector(num) {
  let message = "";
  if (!(num % 3 || num % 5 || num % 7)) {
    message = `${num} is a multiples of 3,5 and 7`;
  } else if (!(num % 3 || num % 5)) {
    message = `${num} is a multiples of 3 and 5`;
  } else if (!(num % 3 || num % 7)) {
    message = `${num} is a multiples of 3 and 7`;
  } else if (!(num % 5 || num % 7)) {
    message = `${num} is a multiples of 5 and 7`;
  } else if (!(num % 3)) {
    message = `${num} is a multiples of 3`;
  } else if (!(num % 5)) {
    message = `${num} is a multiples of 5`;
  } else if (!(num % 7)) {
    message = `${num} is a multiples of 7`;
  } else {
    message = `${num} is not a multiples of 3,5 or 7`;
  }
  return message;
}
console.log(multiplyDetector(420));

//5. Given three numbers. Sort them by the ascending order.
function sortNumbers(num1, num2, num3) {
  let arr = [num1, num2, num3];
  return arr.sort((a, b) => a - b).join(",");
}
console.log(sortNumbers(45, 26, 78));
console.log(sortNumbers(-23, 0, -456));

//6.Find the sign of product of three numbers without multiplication operator. Display the specified sign.
function productSign(num1, num2, num3) {
  if (num1 > 0 && num2 < 0 && num3 < 0) {
    return "+";
  } else if (num1 < 0 && num2 < 0 && num3 > 0) {
    return "+";
  } else if (num1 < 0 && num2 > 0 && num3 < 0) {
    return "+";
  } else if (num1 < 0 && num2 > 0 && num3 > 0) {
    return "-";
  } else if (num1 > 0 && num2 < 0 && num3 > 0) {
    return "-";
  } else if (num1 > 0 && num2 > 0 && num3 < 0) {
    return "-";
  } else if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "unsigned";
  }
}
console.log(productSign(4,19,-2));

//7.Insert a digit and a number. Check whether the digits contains in the number or not.
function numberContainDigit(digit, number) {
  let result = number.toString().includes(digit) ? "YES" : "NO";
  return result;
}
console.log(numberContainDigit(5, 2147));

//8.Enter a number. Reverse its first and last digits. Print the new number.
function firstLastDigitsReverser(num) {
  let numToString = num + "";
  let length = numToString.length;
  let firstDigit = numToString[0];
  let lastDigit = numToString[length - 1];
  let result =
    length === 1
      ? num
      : +(lastDigit + numToString.slice(1, length - 1) + firstDigit);
  return result;
}
console.log(firstLastDigitsReverser(2));



