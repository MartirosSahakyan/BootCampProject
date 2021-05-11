function ucFirst(string) {
  return string[0].toUpperCase() + string.slice(1, string.length);
}
console.log(ucFirst("sahakyan"));

function checkSpamVersion2(str) {
    let string = str.toLowerCase()
  if(string.indexOf('viagra') !== -1 || string.indexOf('xxx') !== -1){
      return true
  }
  return false
}
console.log(checkSpamVersion2("bas aqw xXxX"));

function truncate(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
}
console.log(truncate("congratulations", 10));

function extractCurrencyValue(value) {
  return +value.slice(1);
}
console.log(extractCurrencyValue("$120"));
