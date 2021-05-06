// 1) Create a function that implements partial sum
function sum(num1) {
  return (num2) => {
    return num1 + num2;
  };
}
// console.log(sum(1)(2));
const addOne = sum(1);
// console.log(addOne(2));
const addTen = sum(10);
// console.log(addTen(2));
// console.log(addOne(4));
// console.log(addTen(10));

// 2) Write a function redundant that takes in a string str and returns a function thatreturns str.
function redundant(str) {
  return () => {
    return str;
  };
}
const f1 = redundant("apple");
// console.log(f1());
const f2 = redundant("pear");
// console.log(f2());
const f3 = redundant("");
// console.log(f3());

// 3) Write a function thatreturns an anonymous function, which transforms its input by adding a particular
// suffix at the end.

function add_suffix(suffix) {
  return (str) => {
    return str.concat(suffix);
  };
}

add_ly = add_suffix("ly");
// console.log(add_ly('hopeless'));
// console.log(add_ly('total'));
add_less = add_suffix("less");
// console.log(add_less('fear'));
// console.log(add_less('ruth'));

// Create a function printAfter that calls its argument after printing hello world
const print = () => console.log("Elon Musk");
function printAfter(printFn) {
  console.log("Hello World");
  printFn();
}
// printAfter(print)

// 4) Write a function that implements filtering in array
const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
function filterFalsyValues(array) {
  const res = [];
  return (() => {
    for (const item of array) {
          if (item) {
            res.push(item);
          }
        }
        return res
  })()
}
// console.log(filterFalsyValues(values));
// console.log(filterFalsyValues(["hello", 1233, []]));

// 5) Write a function which remove elements with length <= 3
function filterByLength(array) {
  const res = [];
  return (() => {
    for (const item of array) {
          if (item.length > 3) {
            res.push(item);
          }
        }
        return res
  })()
}
// console.log(filterByLength(["kia", "tesla", "bmw", "mercedes"]));

// 6) Given an array. Determine whether it consists only from uniques or not.
function isUniq(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return false;
      }
    }
  }
  return true;
}
function isOnlyUniqItems(array) {
  return isUniq(array)
}
// console.log(isOnlyUniqItems([10,5, 20, 50]));

// 7) Determine if a word or phrase is an isogram.

function isIsogram(word = '') {
  return isUniq(word)
}
// console.log(isIsogram('hello world'));


