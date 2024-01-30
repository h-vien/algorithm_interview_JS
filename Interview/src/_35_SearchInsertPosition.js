const searchInsert = (nums, target) => {
  let check = nums.includes(target);
  if (!check) {
    nums.push(target);
  }
  for ([idx, key] of Object.entries(nums.sort((a, b) => a - b))) {
    if (key === target) {
      return idx;
    }
  }
};

const i = searchInsert([1, 3, 4, 5], 7);
console.log(i);
