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
