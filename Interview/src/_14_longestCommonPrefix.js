const strs = ["flower", "flow", "flight"];
const strs_2 = ["dog", "racecar", "car"];

const longestCommonPrefix = (strs) => {
  let prefix = strs[0];
  for (let i = 1; i < strs.length && prefix !== ""; i++) {
    const string = strs[i];
    let j = 0;
    while (string[j] && string[j] === prefix[j]) {
      j++;
    }
    prefix = string.substring(0, j);
  }
  console.log(prefix);
};

longestCommonPrefix(strs);
