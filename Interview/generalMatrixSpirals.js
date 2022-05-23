process.stdout.write("\33c");

const MatrixSpirals = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
  }
  let counter = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;
  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;
    //Right col
    for (let i = startRow; i <= endRow; i++) {
      result[i][endCol] = counter;

      counter++;
    }
    endCol--;
    // //Bottom row
    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter;

      counter++;
    }
    endRow--;
    //start Col
    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = counter;
      counter++;
    }
  }
  console.log(result);
  return result;
};
MatrixSpirals(4);
function matrix(n) {
  //Setup array.
  let arr = []; //Think of data structure as: arr[row][col]

  for (let i = 0; i < n; i++) {
    arr.push([]);
  }

  //Setup variables.
  let counter = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;

  while (startCol <= endCol && startRow <= endRow) {
    //Top - SR
    for (let i = startCol; i <= endCol; i++) {
      arr[startRow][i] = counter++;
    }
    startRow++;

    //Right - EC
    for (let i = startRow; i <= endRow; i++) {
      arr[i][endCol] = counter++;
    }
    endCol--;

    //Bottom - ER
    for (let i = endCol; i >= startCol; i--) {
      arr[endRow][i] = counter++;
    }
    endRow--;

    //left - SC
    for (let i = endRow; i >= startRow; i--) {
      arr[i][startCol] = counter++;
    }
    startCol++;
  }

  return arr;
}

//Try it
console.log(matrix(4));
