process.stdout.write("\33c");

//Example palindmore('abba') // true
//Example palindmore('abdgcd') // false

//* Solution - 1
const Palindromes = (str) => {
  const arr = str.split("");
  let i = 0;
  while (i < arr.length / 2) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false;
    }
    i++;
  }
  return true;
};
console.log(Palindromes("abcddcba"));

//* Solution - 2

const Palindromes_2 = (str) => {
  const reversed = str.split("").reverse().join("");
  if (reversed === str) {
    return true;
  }
  return false;
};
console.log(Palindromes_2("abcddcba"));

//* Solution -3
const Palindromes_3 = (str) =>
  str.split("").every((char, i) => char === str[str.length - i - 1]);
console.log(Palindromes_3("123321"));
