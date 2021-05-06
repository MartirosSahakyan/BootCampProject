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

// 6
const clearStringFromSentence = (sentence, str) => sentence.split(str).join("");
// console.log(clearStringFromSentence("This is some text.", 'is'));

// 7
function moveFirst3Chars(str) {
  let lastDigits = str.length % 3;
  let len = str.length;
  let temp = 0;
  let result = "";
  for (let i = 0; i < parseInt(len / 3); i++) {
    let group = str.substr(temp, 3);
    let reverse = group[1] + group[2] + group[0];
    result += reverse;
    group = "";
    reverse = "";
    temp += 3;
  }
  return result + str.slice(len - lastDigits, len);
}
// console.log(moveFirst3Chars("aweyoolp"));

// 8
function findLongestWord(str) {
  let words = str.split(" ");
  let res = "";
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < words[i - 1].length) {
      res = words[i - 1];
    }
  }
  return res;
}

// console.log(
//   findLongestWord(
//     "A revolution without dancing is a revolution not worth having."
//   )
// );

// 9
function findLargerNums(numbers, num) {
  let largerNums = [];
  for (const number of numbers) {
    if (number > num) {
      largerNums.push(number);
    }
  }
  return largerNums.length ? largerNums : "Such values do not exist.";
}

// console.log(findLargerNums([10,-5, 15], 16));
// 13
function longestSubstring(str) {
  let seenChar = {};

  // tracking current substring indexes
  let startIndex = 0;
  let endIndex = 0;

  // keeping largest range
  let max = [startIndex, endIndex];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // if char is space passing it
    if (char === " ") {
      endIndex++;
      continue;
    }

    if (!(char in seenChar)) {
      endIndex++;
      seenChar[char] = i;
      continue;
    }

    // if we find larger range update max
    if (endIndex - startIndex > max[1] - max[0]) {
      max[0] = startIndex;
      max[1] = endIndex;
    }
    // set the loop to continue from seenChar[char] + 1
    startIndex = seenChar[char] + 1;
    endIndex = i = startIndex;
    seenChar = {};
  }
  // cutting from start index to end index
  return str.substring(max[0], max[1]);
}

let string = "ABDEFGABEF";

// console.log(longestSubstring(string));

// 11
function findEvenDigitsNums(num1, num2) {
  const range = [];
  const res = [];
  for (let i = num1; i <= num2; i++) {
    range.push(String(i));
  }
  let isEven = false;
  for (let i = 0; i < range.length; i++) {
    for (let j = 0; j < range[i].length; j++) {
      if (range[i][j] % 2 === 0) {
        isEven = true;
      } else {
        isEven = false;
        break;
      }
    }
    if (isEven) {
      res.push(range[i]);
    }
    if (!res.length) {
      return "Such numbers does not exist.";
    }
  }
  return res;
}
// console.log(findEvenDigitsNums(19, 42));

// 13
function subset(array, arraySize) {
  let resultSet = [];

  for (let x = 0; x < Math.pow(2, array.length); x++) {
    let result = [];
    let i = array.length - 1;
    while (i--) {
      if ((x & (1 << i)) !== 0) {
        result.push(array[i]);
      }
    }
    if (result.length === arraySize) {
      resultSet.push(result);
    }
  }

  return resultSet;
}

let arr = [5, 9, 23, 0, -2, -1];
const res = subset(arr, 3);
// console.log(res.length, res);
