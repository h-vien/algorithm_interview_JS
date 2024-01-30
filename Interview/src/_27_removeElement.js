var removeElement = function (nums, val) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            result.push(nums[i])
        }
    }
    const numsLength = result.length
    for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i]
    }
    return numsLength
};

const res = removeElement([3, 2, 2, 3], 3)

console.log(res)