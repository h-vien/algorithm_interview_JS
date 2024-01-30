process.stdout.write("\33c");

//*Solution -1
const reverseString = (string) => string.split("").reverse().join("");
console.log(reverseString("vien"));

//*Solution -2
const reverseString_2 = (str) => {
  let reserved = "";
  for (const char of str) {
    reserved = char + reserved;
  }
  console.log(reserved);
  return reserved;
};

reverseString_2("Vien");

//*Solution -3
const reverseString_3 = (str) =>
  str.split("").reduce((reserved, char) => {
    return (char += reserved);
  }, "");
console.log(reverseString_3("Vien"));
