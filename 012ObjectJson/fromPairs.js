// Write function that will do reverse operation for Object.entries

function fromPairs(array) {
  let object = array.reduce((acc, curr, i) => {
    acc[curr[0]] = curr[1];
    return acc;
  }, {});
  return object;
}

console.log(
  fromPairs([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ])
);
