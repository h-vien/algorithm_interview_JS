const reverseInt = (n) => {
  let reversed = String(n).split("").reverse();
  let data;
  if (n > 0) {
    data = reversed.join("");
  } else {
    reversed = String(n).split("").reverse();
    reversed.splice(-1, 1);
    data = -Number(reversed.join(""));
  }
  return +data;
};

console.log(reverseInt(15) === 51);
console.log(reverseInt(981) === 189);
console.log(reverseInt(500) === 5);
console.log(reverseInt(-15) === -51);

const reverseInt_2 = (n) => {
  const reversed = String(n).split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
};
console.log(reverseInt_2(15) === 51);
console.log(reverseInt_2(981) === 189);
console.log(reverseInt_2(500) === 5);
console.log(reverseInt_2(-15) === -51);
