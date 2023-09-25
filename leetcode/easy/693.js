/**
 * @param {number} n
 * @return {boolean}
 * @description 给定一个正整数，检查它的二进制表示是否总是 0、1 交替出现：换句话说，就是二进制表示中相邻两位的数字永不相同。
 */
var hasAlternatingBits = function (n) {
    let n1 = n^(n >> 1)
    return (n&(n1+1)) === 0
};

console.log(hasAlternatingBits(5));
console.log(hasAlternatingBits(4)); //false 11
//console.log(hasAlternatingBits(11));
