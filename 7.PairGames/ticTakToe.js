let size = 3;
function createTable(size) {
  let table = [];
  for (let i = 0; i < size; i++) {
    table[i] = [];
  }
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < size; j++) {
      table[i][j] = "-";
    }
  }
  return table;
}

const gameTable = createTable(size);
// console.log(gameTable);
function player0(dask) {
  let x = Math.floor(Math.random() * (size - 1 - 0 + 1)) + 0;
  let y = Math.floor(Math.random() * (size - 1 - 0 + 1)) + 0;
  if (dask[x][y] === "-") {
    dask[x][y] = 0;
  } else {
    // console.log('field is checked');
    player0(dask);
  }
  console.log(check(dask));
}
function player1(dask) {
  let x = Math.floor(Math.random() * (size - 1 - 0 + 1)) + 0;
  let y = Math.floor(Math.random() * (size - 1 - 0 + 1)) + 0;
  if (dask[x][y] === "-") {
    dask[x][y] = 1;
  } else {
    // console.log('field is checked');
    player1(dask);
  }
  console.log(check(dask));
}

function check(table) {
  // check row
  let sumRow = 0;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      sumRow += table[i][j];
    }
    if (sumRow === size || sumRow === 0) {
      return `Player${sumRow / size} win by row`;
    }
    sumRow = 0;
  }
  // check column
  let sumColumn = 0;
  for (let k = 0; k < size; k++) {
    for (let l = 0; l < size; l++) {
      sumColumn += table[l][k];
    }
    if (sumColumn === size || sumColumn === 0) {
      return `Player${sumColumn / size} win by column`;
    }
    sumColumn = 0;
  }
  // check diagonal 1
  let sumDiagonal1 = 0;
  for (let a = 0; a < size; a++) {
    for (let b = 0; b < size; b++) {
      if (a === b) {
        sumDiagonal1 += table[a][b];
      }
    }
  }
  if (sumDiagonal1 === size || sumDiagonal1 === 0) {
    return `Player${sumDiagonal1} win by diagonal`;
  }
  // check diagonal 2
  let sumDiagonal2 = 0;
  for (let c = 0; c < size; c++) {
    for (let d = 0; d < size; d++) {
      if (d === size - c - 1) {
        sumDiagonal2 += table[c][d];
      }
    }
  }
  if (sumDiagonal2 === size || sumDiagonal2 === 0) {
    return `Player${sumDiagonal2} win by diagonal`;
  }
}

player0(gameTable);
player0(gameTable);
player0(gameTable);


// console.log(gameTable);


