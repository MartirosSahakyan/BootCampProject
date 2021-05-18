# RegExp

> Tutorial for practicing RegExp [here](https://regexone.com/lesson/introduction_abcs)

## RegExp practical examples
 1) A pin validation has following Conditions:   
    - Exactly 4 or 6 characters.  
    - Only numerical characters (0-9)  
    - No whitespace.  
    
Solution  
``` javascript
    const myRegExp = /^\d{4}$|^\d{6}$/;
```

2) Find all texts between tags 

Input 
``` javascript
    let str = '<> <a href="/"> <input type="radio" checked> <b>';
```

Solution  
``` javascript
    const REGEXP = /(<[^>]+>)/g;
```
Output  
``` javascript
  str.match(REGEXP) // =>  ['<a href="/">', '<input type="radio" checked>', "<b>"]
```


## Literature
* [RegExp Methods](https://learn.javascript.ru/regexp-methods)     
* [RegExp MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions)   



# Errors

### Tasks Decription  
* Task 1  
Complete the reverseString function, it has one parameter s. You must perform the following actions:
. Try to reverse string s using the split,reverse, and join methods.
. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
. Print s on new line. If no exception was thrown, then this should be the reversed string, if an exception
was thrown, this should be the original string.

* Task 2  
Complete the isPositive function below. It has one integer parameter a . If the value of a is positive, it must
return the string YES. Otherwise, it must throw an Error according to the following rules:
. If a is 0, throw an Error with message = Zero Error.
. If a is negative, throw an Error with message = Negative Error.

* Task 3  
Convert the code using try...catch.  
```javascript  
function reverseString(s) {
typeof s !== "string"
? console.log("s.split is not a function")
: (s = s.split("").reverse().join(""));
console.log(s);
}
```

## Literature
* [JavaScript Errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)     
* [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)    
* [Error handling](https://javascript.info/try-catch)    
* [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)   



