/*
Given a string containing only English letters (uppercase and lowercase). Add opening and closing parentheses
according to the following pattern: "example" -> "(e (x (a (m) p) l) e)" (Added opening parentheses to the
middle, closing parentheses afterthe middle. In case the string length is even there must be 2 characters in the
brackets in the middle. ("card -> (c (ar) d" but not "(c (a () r) d)"). Example`
*/ 
const str = "LItBeoFLcSGBOFQxMHoIuDDWcqcVgkcRoAeocXO";

function addBrackets(str) {
  let res = "";
  let len = str.length;
  let center = Math.floor(len / 2);
  let toCenter = len % 2 ? center : center - 1;

  function recursiveFoo(str, i = 0) {
    if (i === len) {
      return res;
    }
    if (i < toCenter) {
      res += str[i] + "(";
    } else if (i > center) {
      res += ")" + str[i];
    } else {
      res += str[i];
    }
    return recursiveFoo(str, (i += 1));
  }

  recursiveFoo(str, 0);

  return res;
}

console.log(addBrackets(str, 0));
