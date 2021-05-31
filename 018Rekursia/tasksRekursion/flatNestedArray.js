function flatNestedArray(arr) {
  const flatedArray = [];

  function recursiveFoo(arr) {
    if (!Array.isArray(arr)) {
      flatedArray.push(arr);
    } else {
      for (let i = 0; i < arr.length; i++) {
        recursiveFoo(arr[i]);
      }
    }
  }

  recursiveFoo(arr);

  return flatedArray;
}

const array = [1, [3, 4, [1, 2]], 10];
// const array = [14, [1, [[[3, []]], 1], 0]];

console.log(flatNestedArray(array));
