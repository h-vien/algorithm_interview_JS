process.stdout.write("\33c");

const vowels = (strs) => {
  let count = 0;
  const checker = ["a", "i", "e", "o", "u"];
  for (const char of strs.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }
  return count;
};
const vowels_2 = (strs) => {
  const matches = strs.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};
console.log(vowels("123AsdeE2"));
console.log(vowels_2("knknknknknkn"));
