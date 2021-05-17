// Write an object with getter/setter field name.

const obj = {
  _name: [], // ['name', length][]
  set name(value = "") {
    const arr = [];
    value.split(",").forEach((el) => arr.push(el.trim()));
    obj._name = arr.reduce((acc, curr) => {
      acc[curr] = curr.length;
      return acc;
    }, {});
  },
  get name() {
    return Object.entries(obj._name);
  },
};

obj.name = "Vrezh, Artavazd";
console.log(obj.name);

// The input is object, which keys are student's names and values are array of their scores. Find the
// student with the best average score.

const getBestStudent = (object) => {
  const objAvgValues = {};
  let bestAvgStudent;
  for (const key in object) {
    objAvgValues[key] =
      object[key].reduce((acc, el) => (acc += el), 0) / object[key].length;
  }
  let maxAvgValue = Math.max(...Object.values(objAvgValues));
  for (const key in objAvgValues) {
    if (objAvgValues[key] === maxAvgValue) {
      bestAvgStudent = key;
    }
  }
  return bestAvgStudent;
};

console.log(
  getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80],
  })
);
