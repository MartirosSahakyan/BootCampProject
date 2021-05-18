//  Create a RegExp myRegExp to test if a string is a valid pin or not.
// A valid pin has:
// 1.Exactly 4 or 6 characters.
// 2.Only numerical characters (0-9).
// 3.No whitespace.

const input = " 4983";
const myRegExp = /^\d{4}$|^\d{6}$/;
console.log(myRegExp.test(input));

// Find all texts between tags

const REGEXP = /(<[^>]+>)/g;
let str = '<> <a href="/"> <input type="radio" checked> <b>';
console.log(str.match(REGEXP));
