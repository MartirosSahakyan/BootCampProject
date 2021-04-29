// 1.Given a number. Print “odd” if the number is odd and “even” if itʼs even.
function evenOddNumber(num) {
  let result = num % 2 ? "odd" : "even";
  return result;
}
// console.log(evenOddNumber(15));

// 2.Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of the angles of a triangle equals 180 degrees).
function triangleAnglesFinder(firstAngle, secondAngle) {
  let result = 180 - +firstAngle - +secondAngle;
  if (!isNaN(result)) {
    return result;
  } else {
    return "insert only numbers";
  }
}
// console.log(triangleAnglesFinder('20',60));

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
// console.log(lastDigitReverser(1002));

//4.Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
function multipliDetectr(num) {
    let message = ''
    if (!(num % 3 || num % 5 || num % 7)) {
        message = `${num} is a multiplie of 3,5 and 7`
     }else if(!(num % 3 || num % 5 )){
         message = `${num} is a multiplie of 3 and 5`
     }
     else if(!(num % 3 || num % 7 )){
         message = `${num} is a multiplie of 3 and 7`
     }
     else if(!(num % 5 || num % 7 )){
         message = `${num} is a multiplie of 5 and 7`
     }
     else if(!(num % 3)){
         message = `${num} is a multiplie of 3`
     }
     else if(!(num % 5)){
         message = `${num} is a multiplie of 5`
     }
     else if(!(num % 7)){
         message = `${num} is a multiplie of 7`
     }else{
         message = `${num} is not a multiplie of 3,5 or 7`
     }
     return message
}
console.log(multipliDetectr(420));
