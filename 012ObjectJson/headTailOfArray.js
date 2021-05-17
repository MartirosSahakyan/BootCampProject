//  Write functions that willreturn head and tail of Array

const getHead = (array) => [array[0]];
console.log(getHead([1, 2, 3]), "getHead");

const getTail = (array) => array.slice(1);
console.log(getTail([1, 2, 3]), "getTail");
