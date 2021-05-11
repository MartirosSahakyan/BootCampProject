//  Given an array, return the sum of numbers that are 18 or over.
const arr = [1, 22, 55, 166, 5, 366, 11, 205, 333, 95, 62, 10, 43];
const sumOver18 = arr.reduce((acc, curr) => {
  if (curr >= 18) {
    acc += curr;
  }
  return acc;
});
// console.log(sumOver18);

//  Write a function which calculates average age of users.
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

// const getAverageAge = (users) =>
//   users.reduce((acc, curr) => {
//     acc += curr.age;
//     return acc;
//   }, 0) / users.length

const getAverageAge = (users) =>
  users.reduce((acc, curr) => (acc += curr.age), 0) / users.length;
  
console.log(getAverageAge(users));
