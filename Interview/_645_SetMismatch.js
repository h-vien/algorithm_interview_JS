/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function (nums) {
    const arr = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        arr[nums[i]]++;
    }
    return [arr.indexOf(2), arr.lastIndexOf(0)];
};

const result = findErrorNums([3, 2, 3, 4, 6, 5])