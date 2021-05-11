let admin, name;
name = "John";
admin = name;
// console.log(admin);

let i = 10;
let n = i++ % 5;
// console.log(n);

//Swap two variables
let a = 10;
b = 3;
let c = a;
a = b;
b = c;
// console.log(a);
// console.log(b);

// Swap two variables without using the third one
let x = 10;
let y = 3;
x = x + y;
y = x - y;
x = x - y;
console.log("y", y);
console.log("x", x);
