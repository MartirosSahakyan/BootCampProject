//   Given an array of numbers which is almost sorted in ascending order. Find the index
// where sorting order is violated.

let index = 1;
function indexBreakingSort(arr) {
  let len = arr.length;
  let slicedArr = arr.slice(1, len);
  if (len > 1) {
    if (arr[0] <= arr[1]) {
      index++;
      return indexBreakingSort(slicedArr);
    }
    return index;
  } else {
    return -1;
  }
}

const array = [2, 12, 15, 48, 64];
// const array = [-9, -4, -4, 3, 12, 4, 5]
// const array = [1,12]
// const array = [12,1]

console.log(indexBreakingSort(array));
