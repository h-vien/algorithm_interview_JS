/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
    const lengthA = a.length;
    const lengthB = b.length;   
    const length = Math.max(lengthA, lengthB);
    let result = '';

    let carry = 0;
    for( let i = 0; i< length; i ++ ){
        let digitA = i < lengthA ? a[lengthA - 1] : 0
        let digitB = i <lengthB ? b[lengthB - 1] : 0
        let sum = Number(digitA) + Number(digitB)
        const convertedToBit =  sum >= 2 ? '0' : '1'
        console.log(convertedToBit,'convertedToBit')
        console.log(digitA, digitB, sum)
    }

};

const  res = addBinary('11', '1');
console.log(res)

