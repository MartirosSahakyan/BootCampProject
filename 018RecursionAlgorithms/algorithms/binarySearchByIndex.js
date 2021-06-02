const arr = [1, 2, 3, 4, 5, 6];

function binarySearchIndexElem(arr, value) {
  const array = arr;

  function binarySearch(arr, value) {
    let center = Math.floor(arr.length / 2);
    let middleElem = arr[center];
    let size = arr.length;

    if (middleElem === value) {
      return array.indexOf(middleElem);
    }
    if (middleElem < value && size > 1) {
      return binarySearch(arr.slice(center), value);
    }
    if (middleElem > value && size > 1) {
      return binarySearch(arr.slice(0, center), value);
    }
    return -1;
  }

  return binarySearch(arr, value);
}

console.log(binarySearchIndexElem([5, 6, 7, 8, 9, 10, 25], 5));
