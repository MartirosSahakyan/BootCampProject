// 1. Enter a number. Find the difference between its biggest and smallest digits.
function differenceSmBgDigits(number) {
  numToArray = number.toString().split("");
  return Math.max(...numToArray) - Math.min(...numToArray);
}
console.log(differenceSmBgDigits(152));

// 3.Takes two arrays and insert the second array in the middle of the first array. The first array always has two elements.
let concatAndSortArrays = (firstArray, secondArray) =>
  firstArray.concat(secondArray).sort((a, b) => a - b);

console.log(concatAndSortArrays([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));

// 4 Enter a positive number. Calculate and print its factorial. ( n! = n _ (n-1) _ (n-2) _ ... _ 3 _ 2 _ 1 , 0! = 1 )
function factorialCalculator(num) {
  let result = 1;
  for (let i = 1; i <= 5; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialCalculator(7));




