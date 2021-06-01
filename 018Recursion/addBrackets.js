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
