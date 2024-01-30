var lengthOfLastWord = function (s) {
  const _str = s.trim().split(" ");

  return _str[_str.length - 1].length;
};

console.log(lengthOfLastWord("Huynh dinh honag vien         "));
