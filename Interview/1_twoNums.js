var twoSum = function (nums, target) {
  let x, y;
  x = nums.findIndex((num1, index1) => {
    y = nums.findIndex(
      (num2, index2) => num1 + num2 === target && index1 !== index2
    );
    return ~y;
  });
  return [x, y];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 7));

const twoSum_2 = (nums, target) => {
  let _arr = [];
  const result = nums.filter(
    (el) =>
      nums.includes(target - el) &&
      nums.indexOf(el) != nums.lastIndexOf(target - el)
  );
  return [nums.indexOf(result[0]), nums.lastIndexOf(result[1])];
};
console.log(twoSum_2([2, 7, 11, 15], 9));
