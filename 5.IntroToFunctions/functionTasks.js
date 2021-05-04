// 1
function separateOddEven(nums = []) {
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
function calculateArrayItems(array = [], operator = "") {
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
const validatePhoneNumber = function (input = "") {
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

// 4
const findAnagrams = (str = "", array = []) => {
  let result = [];
  array.forEach((el) => {
    if (str.split("").sort().join("") === el.split("").sort().join("")) {
      result.push(el);
    }
  });
  return result;
};
// console.log(findAnagrams('pencil', ['licnep', 'circular', 'pupil', 'nilcpe', 'leppnec']));

// 5
function sumNumsInString(str = "") {
  let strToArr = str.split("");
  let temp = "";
  let sum = 0;
  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i] === "-" || !isNaN(Number(strToArr[i]))) {
      temp += strToArr[i];
    } else {
      sum += Number(temp);
      temp = "";
    }
  }
  if (Number(temp)) {
    sum += Number(temp);
  }
  return sum;
}
// console.log(sumNumsInString("FwrtY12KHL-12"));

// 7
function moveFirst3Chars(str) {
    let lastDigits = str.length % 3
    let len = str.length
    let temp = 0
    let result = "";
    for (let i = 0; i < parseInt(len / 3); i++) {
        let group = str.substr(temp, 3);
        let reverse = group[1] + group[2] + group[0];
        result += reverse;
        group = "";
        reverse = "";
        temp += 3 
    }
    return result + str.slice(len-lastDigits, len)
}
console.log(moveFirst3Chars('aweyoolp'));

 
