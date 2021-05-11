//   Given an array, return a new array that only includes the numbers.
const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];
const numbers = arr
  .filter((el) => typeof el === "number")
  .filter((el) => !isNaN(el));
console.log(numbers);

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    lang: "ARM",
    isAstronaut: false,
  },
];
//  Write a function which remove users with language equals to 'ru'.
const filterUsers = (users) => users.filter((el) => el.lang !== "ru");
console.log(filterUsers(users));

//  Write a function which filters object by field.
const filterByField = (users) => users.filter((el) => el.isAstronaut);
console.log(filterByField(users));
