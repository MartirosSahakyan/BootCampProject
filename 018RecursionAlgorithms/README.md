# Recursion

### Recursive function examples

- *sum of a given array.*   
  ``` javascript 
  const sum = (array) => (array.length === 0) ? 0 : array[0] + sum(array.slice(1));
  ```
- *sum of  1, 2, 3 ... n numbers*   
  ``` javascript 
  const sumTo = (n) => (n === 1 ? 1 : n + sumTo(n - 1));
  ```
- *the factorial of a given natural N*   
  ``` javascript 
  const factorial = (n) => (n === 1 ? 1 : n * factorial(n - 1));
  ```
- *fib(int) function which returns n-th fibonacci number.*   
  ``` javascript 
  const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));
  ```
 
> see more tasks [here](https://github.com/MartirosSahakyan/BootCampProject/tree/main/018Recursion/tasksRekursion)

# Sorting Algorithms  

  - [binary search](https://github.com/MartirosSahakyan/BootCampProject/blob/main/018RecursionAlgorithms/algorithms/binarySearchByIndex.js)  
  - [bubble sort](https://github.com/MartirosSahakyan/BootCampProject/blob/main/018RecursionAlgorithms/algorithms/bubbleSort.js)    
  - [merge sort](https://github.com/MartirosSahakyan/BootCampProject/blob/main/018RecursionAlgorithms/algorithms/mergeSort.js)   

 ## Literature

[Recursion](https://learn.javascript.ru/recursion)