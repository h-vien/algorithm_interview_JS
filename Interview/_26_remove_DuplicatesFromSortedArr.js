
var removeDuplicates = function (nums) {
  const _arr = [...new Set(nums)];
  nums.length = 0;
  nums.push(..._arr);
};

const k = removeDuplicates([1, 1, 2]);

console.log(k);
