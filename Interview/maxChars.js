const maxChar = (str) => {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    // if (charMap[char]) {
    //   charMap[char]++;
    // } else {
    //   charMap[char] = 1;
    // }
    charMap[char] = charMap[char] + 1 || 1;
  }
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
};
console.log(maxChar("ababbcccccccccccccccccccccccdddddddd"));
