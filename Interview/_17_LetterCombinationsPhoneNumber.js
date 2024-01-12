const mappedNumber = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}

const letterCombinations = function (digits) {
    if (digits.length == 0) return [];


    const iterate = (nums) => {
        let arr = [];
        if (nums.length == 1) return mappedNumber[nums];
        let first = nums.slice(0, 1);
        let others = iterate(nums.slice(1));
        for (let digit of mappedNumber[first]) {
            for (let pairDigit of others) {
                arr.push(digit + pairDigit);
            }
        }
        return arr;
    }

    return iterate(digits)

};
const res = letterCombinations('235')
console.log(res)
// letterCombinations("235")