// 1
function separateOddEven(nums) {
  let oddNums = [];
  let evenNums = [];
  nums.forEach((element) => {
    if (element % 2) {
      evenNums.push(element);
    } else {
      oddNums.push(element);
    }
  });
  return { evenNums, oddNums };
}
// console.log(separateOddEven([45, 12, 3, 6, 17, 0]));

// 2
function calculateArrayItems(array, operator) {
  let res;
  if (operator === "+") {
    res = array.reduce((acc, el) => acc + el);
  } else if (operator === "-") {
    res = array.reduce((acc, el) => acc - el);
  } else if (operator === "*") {
    res = array.reduce((acc, el) => acc * el);
  } else if (operator === "/") {
    res = array.reduce((acc, el) => acc / el);
  }
  return res;
}
// console.log(calculateArrayItems([1, 2, 3, 4], "+"));

// 3
let validatePhoneNumber = function (input = "") {
  let number = input
    .split("")
    .filter((el) => el.trim())
    .join("");
  let len = number.length;
  if (
    len < 10 ||
    len > 11 ||
    (number.includes("+") && !number.startsWith("+")) ||
    number.indexOf("+") !== number.lastIndexOf("+")
  ) {
    return "Bad Number";
  } else if ((len === 11) & number.startsWith("+")) {
    return number.slice(1, len);
  }
  return "Good Number";
};
// console.log(validatePhoneNumber("339 5656888"));


