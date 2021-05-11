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
