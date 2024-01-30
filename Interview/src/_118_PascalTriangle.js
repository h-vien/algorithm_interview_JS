var generate = function (numRows) {
    let arr = []
    for (let i = 0; i < numRows; i++) {
        arr[i] = []
        arr[i][0] = 1
        arr[i][i] = 1
        for (let j = 1; j < i; j++) {
            arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
        }
    }
    return arr
};

const result = generate(5)
console.log(result)