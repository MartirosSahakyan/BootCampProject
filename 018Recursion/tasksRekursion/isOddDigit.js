// 1. Write a recursive function to determine whether all digits of the number are odd or not.
function isOdd(num) {
  const str = num.toString();
  const len = str.length;
  const slicedStr = str.slice(0, len - 1);
  if (!(str[len - 1] % 2)) {
    return false;
  } else if (len === 1) {
    return true;
  } else {
    return isOdd(slicedStr);
  }
}

//   const number = 4211133
//   const number = 7791
const number = 5;

console.log(isOdd(number));
