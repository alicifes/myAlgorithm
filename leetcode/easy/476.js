/**
 * @param {number} num
 * @return {number}
 * @description 对整数的二进制表示取反（0 变 1 ，1 变 0）后，再转换为十进制表示，可以得到这个整数的补数。
 * 例如，整数 5 的二进制表示是 "101" ，取反后得到 "010" ，再转回十进制表示得到补数 2 。
 * 给你一个整数 num ，输出它的补数.
 */
var findComplement = function (num) {
  return num
    .toString(2)
    .split("")
    .map((i) => (i === "1" ? 0 : 1))
    .reverse()
    .reduce((pre, cur, index, arr) => {
      return (cur = arr[index] * Math.pow(2, index) + pre);
    }, 0);
};

console.log(findComplement(5));
console.log(findComplement(1));
console.log(findComplement(2)); //1
