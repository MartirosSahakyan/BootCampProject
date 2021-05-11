function myForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    callback(array[index], index, array);
  }
}

function myFindIndex(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

function myFind(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index, array)) {
      return array[index];
    }
  }
}

function myMap(array, callback) {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    newArray[index] = callback(array[index], index, array);
  }
  return newArray;
}

function myFilter(array, callback) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index, array)) {
      newArray.push(array[index]);
    }
  }
  return newArray;
}

function myEvery(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (!callback(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

function mySome(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

function mySlice(array, start = 0, end=array.length) {
  const newArray = []
  if (start < 0) {
    for (let i = array.length+start; i < array.length; i++) {
      newArray.push(array[i])
    }
    return newArray
  }
  for (let i = start; i < end; i++) {
    newArray.push(array[i])
  }  
  return newArray
}

// let arr = [1,2,3,4]
// let res = arr.slice(-3)
// console.log(res);

let arr = [1,2,3,4]
let res = mySlice(arr, -3)
console.log(res);