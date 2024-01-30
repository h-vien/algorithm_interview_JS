const plusOne = (digits) => {
  let add = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (add === 1) {
      if (digits[i] === 9) {
        digits[i] = 0;
      } else {
        digits[i] += 1;
        add = 0;
        break;
      }
    } else {
      break;
    }
  }
  if (add === 1) digits.unshift(1);

  return digits;
};

// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 3, 4, 3]));

console.log(plusOne([9]));
