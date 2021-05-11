console.log(null || 2 || undefined); // 2

console.log(console.log(1) || 2 || console.log(3)); // 1 , 2

console.log(1 && null && 2); // null

console.log(console.log(1) && console.log(2)); // 1, undefined

console.log(null || (2 && 3) || 4); // 3

let age = 10;

// Write an if condition to check that age is between 14 and 90 inclusively.
if (age >= 14 && age <= 90) {
  console.log(true);
} else {
  console.log(false);
}

// Write an if condition to check that age is NOT between 14 and 90 inclusively.
if (age < 14 || age > 90) {
  console.log(true);
} else {
  console.log(false);
}

console.log(-1 || 0); // -1
console.log(-1 && 0); // 0
console.log(null || -1 && 1);  // 1