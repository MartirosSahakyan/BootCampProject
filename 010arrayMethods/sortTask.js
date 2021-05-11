// Create a function that takes an array of numbers arr, a string str
// and return an array of numbers as per the following rules:
//      - "Asc" returns a sorted array in ascending order.
//      - "Desc" returns a sorted array in descending order.

// function sortBy(array, str) {
//   if (str === "Asc") {
//     return array.sort((a, b) => a - b);
//   } else if (str === "Desc") {
//     return array.sort((a, b) => b - a);
//   }
//   return array;
// }

const sortBy = (array, str) =>
  str === "Asc"
    ? array.sort((a, b) => a - b)
    : str === "Desc"
    ? array.sort((a, b) => a - b)
    : array;

console.log(sortBy([66, 99, 7, 0], "Desc"), "-Desc");
console.log(sortBy([66, 99, 7, 0], "Asc"), "-Asc");
console.log(sortBy([66, 99, 7, 0]));
