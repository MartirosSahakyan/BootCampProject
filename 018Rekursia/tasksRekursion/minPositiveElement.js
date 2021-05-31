// Given an array of numbers. Write a recursive function to find its minimal positive
// element. (if such element does not exist, return -1).

let temp = +Infinity;
function minPositiveElement(arr) {
  let len = arr.length;
  let newArr = arr.slice(1, len);
  if (arr[0] >= 0) {
    if (arr[0] < temp) {
      temp = arr[0];
    }
    if (len === 0) {
      return temp;
    } else {
      return minPositiveElement(newArr);
    }
  } else if (arr[0] < 0) {
    return minPositiveElement(newArr);
  }

  return temp === Infinity ? -1 : temp;
}

// const array = [56, -9, 87, -23, 0, -105, 55, 1]
// const array = [45, -9, 15, 5, -78]
const array = [-5, -9, -111, -1000, -7];

console.log(minPositiveElement(array));
