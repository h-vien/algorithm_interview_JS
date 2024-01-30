const anagrams = (strA, strB) => {
  const aCharMap = buildCharMap(strA);
  const bCharMap = buildCharMap(strB);
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
};
const buildCharMap = (str) => {
  const charMap = {};
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
};
console.log(anagrams("hehe tada", "haha tede"));

//! ============= Way 2 ======================= !//

const anagrams_2 = (strA, strB) => {
  return cleanString(strA) === cleanString(strB);
};
const cleanString = (str) => {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .toLowerCase()
    .split("")
    .sort()
    .join("");
};
console.log(anagrams_2("hehe tada", "haha tede"));
