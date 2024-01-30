function palindrome_fcc(str) {
  str = str.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
  console.log(str);
  return str === str.split("").reverse().join("");
}

console.log(palindrome_fcc("_eye"));

function convertToRoman(num) {
  const decimalVal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumber = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let result = "";
  for (let i = 0; i < decimalVal.length; i++) {
    while (num >= decimalVal[i]) {
      result += romanNumber[i];
      num -= decimalVal[i];
    }
  }
  return result;
}

console.log(convertToRoman(44));

function rot13(str) {
  const alphabets = "NOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return str
    .split("")
    .map((letter) => {
      const idx = alphabets.lastIndexOf(letter);
      if (idx === -1) return letter;

      return alphabets[idx - 13];
    })
    .join("");
}

console.log(rot13("SERR CVMMN!"));

function checkCashRegister(price, cash, cid) {
  const unitMap = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5.0,
    TEN: 10.0,
    TWENTY: 20.0,
    "ONE HUNDERED": 100.0,
  };
  let totalCID = 0;
  for (let money of cid) {
    totalCID += money[1];
  }
  totalCID = totalCID.toFixed(2);
  let changeToGive = cash - price;
  const changeArr = [];
  if (changeToGive > totalCID) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (changeToGive.toFixed(2) === totalCID) {
    return {
      status: "CLOSED",
      change: cid,
    };
  } else {
    cid = cid.reverse();
    for (let money of cid) {
      const [unit, val] = money;
      const addition = [unit, 0];
      while (changeToGive >= unitMap[unit] && val > 0) {
        addition[1] += unitMap[unit];
        val -= unitMap[unit];
        changeToGive -= unitMap[unit];
        changeToGive = changeToGive.toFixed(2);
      }
      if (addition[1] > 0) {
        changeArr.push(addition);
      }
    }
  }
  if (changeToGive > 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: [],
    };
  }
  return {
    status: "OPEN",
    change: changeArr,
  };
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
