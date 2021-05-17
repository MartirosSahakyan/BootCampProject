// Write function that will zip arrays into object

function zipObject(array1, array2) {
  const obj = array1.reduce((acc, curr, i) => {
    acc[curr] = array2[i];
    return acc;
  }, {});
  for (const key in obj) {
    if (!obj[key]) {
      obj[key] = null;
    }
  }
  return obj;
}

console.log(zipObject(["a", "b", "c"], [1, 2]));
