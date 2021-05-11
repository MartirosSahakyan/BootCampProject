const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];
// Write a function which returns array of usernames.
const getUserNames = (users) => users.map((user) => user.username);

console.log(getUserNames(users));

//  Write a function which returns array of lengths of user names
const getUsernameLengths = (users) => users.map((user) => user.username.length);

console.log(getUsernameLengths(users));

// Write a function which parses string integers. If it's not possible to parse, then add null
const parseInteger = (array) =>
  array.map((el) => parseInt(el)).map((el) => (el ? el : null));
  
console.log(parseInteger(["20", "25px", "str"]));
