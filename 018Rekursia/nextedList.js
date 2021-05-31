let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

const arr = [];
function printList(list) {
  if (list.next) {
    arr.push(list.value);
    return printList(list.next);
  } else {
    arr.push(list.value);
    return arr;
  }
}
console.log("list::", printList(list));

const reverseArr = [];
function printReverseList(list) {
  if (list.next) {
    reverseArr.unshift(list.value);
    return printReverseList(list.next);
  } else {
    reverseArr.unshift(list.value);
    return reverseArr;
  }
}
console.log("Reverse List::", printReverseList(list));
