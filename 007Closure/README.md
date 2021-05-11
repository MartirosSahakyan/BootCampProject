# Closure

## Example
```javascript
   function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
```

### Usage
- [Variable scope, closure](https://javascript.info/closure)  
