//9. Insert a number. Print "yes" if the number is prime, ‘noʼ otherwise.
function primeNumber(number) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return "NO";
      }
    }
    return "YES";
  }
  // console.log(primeNumber(401));
  
  //10. Given a number n ( n >= 0 ) . Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 ..., ak = ak-1 + ak-2)
  function sumFibonacciNumbers(number) {
    let firstItem = 0,
      secondItem = 1,
      fibArr = [0, 1],
      nextItem;
    for (let i = 0; i < number; i++) {
      nextItem = firstItem + secondItem;
      firstItem = secondItem;
      secondItem = nextItem;
      fibArr.push(nextItem);
    }
    return fibArr;
  }
  // console.log(sumFibonacciNumbers(5));
  
  //11 Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum, print the quotient, otherwise print the remainder.
  function divideSumProduct(number) {
    if (number === 0) {
      return "Cannot calculate";
    }
    let sum = 0,
      product = 1,
      result;
    let numberToArray = number.toString().split("");
    for (const item of numberToArray) {
      sum += +item;
      product *= +item;
    }
    return (result =
      product % sum === 0
        ? `Quotient is ${product / sum}`
        : `Remainder is ${product % sum}`);
  }
  // console.log(divideSumProduct(0));
  