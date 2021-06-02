function flatNestedArray(arr) {
  const flattedArray = [];

  function recursiveFoo(arr) {
    console.log(arr);
    if (!Array.isArray(arr)) {
      flattedArray.push(arr);
    } else {
      arr.forEach((item) => recursiveFoo(item));
    }
  }

  recursiveFoo(arr);

  return flattedArray;
}

const array = [1, [3, 4, [1, 2]], 10];
// const array = [14, [1, [[[3, []]], 1], 0]];

console.log(flatNestedArray(array));
