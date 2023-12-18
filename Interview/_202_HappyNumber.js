console.log('test')

var isHappy = function (n) {
    if (n === 1) return true
    if (n < 10 && n !== 7) return false
    let result = 0;
    while (n > 0) {
        let number = n % 10
        n = Math.floor(n / 10)
        result += Math.pow(number, 2)
    }
    return isHappy(result)
};
const result = isHappy(7)
console.log(result)