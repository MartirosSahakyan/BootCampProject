const numbers = [7, 10, [5, [9, 4]], 2, 1];

function bubbleSort(arr) {
  const array = arr.flat(Infinity);
  const size = array.length;
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (array[i] > array[j]) {
        const temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort(numbers));
