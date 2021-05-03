# Type Coercion for primitives

```javascript
console.log('' + 1 + 0); // '10'
console.log('' - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / '3');  // 2
console.log('2' * '3'); // 6
console.log(4 + 5 +'px'); // 9px
console.log('$' + 4 + 5); // $45
console.log('4' - 2); // 2
console.log('4px' - 2); // NaN
console.log(7 / 0); // Infinity
console.log('-9' + 5); // -95
console.log('-9' - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
```
---
>More similar tasks you can find in the typeCoercion.js

### Usage
[Type Conversions](https://javascript.info/type-conversions)  
[Comparison Table](https://dorey.github.io/JavaScript-Equality-Table/)
