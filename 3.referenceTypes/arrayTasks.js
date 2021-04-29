//12 Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the words from the array.
function completeSentence(sentence, array) {
  let sentenceToArray = sentence.split(" ");
  for (let i = 0; i < sentenceToArray.length; i++) {
    if (sentenceToArray[i] === "_") {
      sentenceToArray[i] = array.shift();
    }
  }
  return sentenceToArray.join(" ");
}
console.log(completeSentence("May the _ _ _ _", ['Force', 'be', 'with', 'you']));

//13. Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the numbers
// in a separate array. Arrange them such as from the beginning are the odds and from the ending the evens.
function filterArrayAndSort(array) {
  let filteredArray = array.filter((e) => typeof e === "number" && !isNaN(e));
  let result = [];
  for (const item of filteredArray) {
    if (item % 2 === 0) {
      result.push(item);
    } else {
      result.unshift(item);
    }
  }
  return result;
}
console.log(filterArrayAndSort([8, 0, 1, "hey", 12, 5 , true, "2", null, NaN, 7, 3]));

//14 Given an array of strings and numbers. Print the number of integers and the number of strings in the array
function stringNumberCounter(array) {
  let countNum = 0;
  let countStr = 0;
  for (const i of array) {
    if (typeof i === "number") {
      countNum++;
    } else {
      countStr++;
    }
  }
  return `Numbers: ${countNum}, Strings:${countStr}`;
}
console.log(stringNumberCounter([1, "10", "hi", 2, 3]));

//15 Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum of
// their lengths.
function sumMaxMinLengthStrings(array) {
  let lengthsArr = [];
  for (const i of array) {
    lengthsArr.push(i.length);
  }
  return Math.min(...lengthsArr) + Math.max(...lengthsArr);
}
console.log(sumMaxMinLengthStrings(["anymore", "raven", "me", "communicate"]));

//16 Given an array of numbers and a number. Find the index of a first element which is equal to that number.
// If there is not such a number, that find the index of the first element which is the closest to it.
function findIndexOfNum(array, num) {
  for (const i in array) {
    if (array[i] === num) {
      return i;
    }
  }
  let rangeArr = [];
  for (const i in array) {
    rangeArr.push(Math.abs(array[i] - num));
  }
  let minRange = Math.min(...rangeArr);
  return rangeArr.indexOf(minRange);
}
  console.log(findIndexOfNum([5, 46, 17, -2, 89, 0, 26], 36));

// 17. Given a sentence as a string. Split it according to space and comma and create an array consisting of the
// words of the array. The last word should not contain the last . or!

function sentenceSplit(sentence) {
  return sentence.slice(0, sentence.length - 1).split(",");
}
console.log(sentenceSplit("May the Force be with you."));

//19. Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each row and print them as an array.
function sumMatrixRow(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j];
    }
    result.push(sum);
  }
  return result;
}

console.log(
  sumMatrixRow([
    [3, 4, 5],
    [1, 0, 0],
    [4, 5, 4],
    [8, 8, -1],
  ])
);
