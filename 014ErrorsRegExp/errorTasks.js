// Task 1
function reverseString(str) {
  if (typeof str === "string") {
    console.log(str.split("").reverse().join(""));
  } else if (str === undefined) {
    throw Error("argument is missing");
  } else {
    throw TypeError("str split is not a function");
  }
}

try {
  reverseString("abc");
} catch (err) {
  if (err.name === "Error") {
    console.log(err.message);
  } else if (err.name === "TypeError") {
    console.log(err.message);
  }
}

// Task 2
function isPositive(num) {
  if (num === 0) {
    throw Error("Zero Error");
  } else if (num < 0) {
    throw Error("Negative Error");
  } else {
    console.log("YES");
  }
}

try {
  isPositive(0);
} catch (err) {
  console.log(err.message);
}

// Task 3
const s = "abc";
try {
  if (typeof s !== "string") {
    throw new Error("s.split is not a function");
  }
  console.log(s.split("").reverse().join(""));
} catch (error) {
  console.log(error.message);
}
