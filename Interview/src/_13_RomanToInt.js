function convertToRoman(num) {
  const decimalVal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumber = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let result = "";
  for (let i = 0; i < decimalVal.length; i++) {
    while (num >= decimalVal[i]) {
      result += romanNumber[i];
      num -= decimalVal[i];
    }
  }
  return result;
}
const strToVal = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const curVal = strToVal[s[i]];
    const nextVal = s.length > i + 1 ? strToVal[s[i + 1]] : null;
    if (nextVal && curVal < nextVal) {
      sum += nextVal - curVal;
      i++;
    } else {
      sum += curVal;
    }
  }
  return sum;
};

const calc = romanToInt("MCMXCIV");
console.log(calc);
