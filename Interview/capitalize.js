process.stdout.write("\33c");

const capitalization = (str) => {
  const strs = str.split(" ");
  let newStr = "";
  for (let _str of strs) {
    newStr += _str[0].toUpperCase() + _str.slice(1) + " ";
  }
  console.log(newStr);
};

capitalization("xin chao moi nguoi minh la vien");

const capitalization_2 = (str) => {
  const words = [];
  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(" ");
};
console.log(capitalization_2("xin chao moi nguoi minh la hoang"));

const capitalization_3 = (str) => {
  let result = str[0].toUpperCase();
  console.log(result);
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
};
console.log(capitalization_3("xin chao moi nguoi minh la ti"));
