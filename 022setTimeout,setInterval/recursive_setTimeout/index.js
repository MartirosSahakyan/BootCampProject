function printNumbers(from, to) {
    let id = setTimeout(function run() {
      if (from - 1 === to) {
        clearTimeout(id);
      } else {
        console.log(from);
        from++;
        id = setTimeout(run, 1000);
      }
    }, 1000);
  }
  
  printNumbers(1, 10);
  