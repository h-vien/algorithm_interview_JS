/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = function (arr, size) {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
        const chunk = arr.slice(i, i + size);
        res.push(chunk);
    }
    return res;
};

const result = chunk([1, 2, 3, 4, 5], 3)
console.log(result)

function rotateArrayBruteForce(array, rotations) {
    let counter = 0;

    while (counter < rotations) {
        for (let i = array.length - 1; i > 0; i--) {
            const temp = array[i];
            array[i] = array[i - 1];
            array[0] = temp;
        }

        counter++;
    }
    return {
        array,
        counter,
        rotations
    }
}

const rotateArrayBruteForceResult = rotateArrayBruteForce([1, 2, 3, 4, 5], 3)
console.log(rotateArrayBruteForceResult)