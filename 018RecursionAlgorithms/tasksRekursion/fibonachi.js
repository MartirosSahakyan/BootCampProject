// return n-th member of Fibonacci sequence

// v1
function fib1(n) {
  let fibArr = [1, 1];
  for (let i = 1; i < n - 1; i++) {
    fibArr.push(fibArr[i] + fibArr[i - 1]);
  }

  return fibArr[fibArr.length - 1];
}
console.log(fib1(7));

// v2
function fib2(n) {
  let a = 1,
    b = 1,
    c;
  for (let i = 2; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}
console.log(fib2(7));

// v3  (Rekursia)
const fib3 = (n) => (n <= 1 ? n : fib3(n - 1) + fib3(n - 2));
console.log(fib3(7));
