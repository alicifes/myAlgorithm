/**
 * @param {number} num
 * @return {number}
 * @description 给你一个仅由数字 6 和 9 组成的正整数 num。
 * 你最多只能翻转一位数字，将 6 变成 9，或者把 9 变成 6 。
 * 请返回你可以得到的最大数字。
 */
var maximum69Number = function (num) {
  num = num.toString().split("");
  for (let i = 0; i < num.length; i++) {
    if (num[i] === "6") {
      num[i] = "9";
      return parseInt(num.join(""));
    }
  }
  return parseInt(num.join(""));
};

console.log(maximum69Number(9669));
