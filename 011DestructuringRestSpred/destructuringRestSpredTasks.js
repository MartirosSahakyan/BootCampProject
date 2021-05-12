// Concatenate the two arrays

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const concatArr = [...arr1, ...arr2];
console.log(concatArr);

// Concatenate arrays
const concateArrays = (...arrays) => {
  return arrays.reduce((acc, curr) => [...acc, ...curr]);
};
console.log(concateArrays([1, 2, 3, 4], [5, 6, 7], [8, 9, 10]));

// sum function
const sum = (...args) => args.reduce((acc, curr) => (acc += curr), 0);
console.log(sum(-5, 3, 2, 21));

//  Swapping Values using the Destructuring Assignment
let a = 3;
b = 6;

[a, b] = [b, a];

console.log(a);
console.log(b);
