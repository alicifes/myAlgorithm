/**
 * @param {number} n
 * @return {number}
 * @description 给你一个整数 n，请你帮忙计算并返回该整数「各位数字之积」与「各位数字之和」的差。
 */
var subtractProductAndSum = function (n) {
  let sum = 0;
  let radio = 1;
  n = n.toString().split("");
  for (let i = 0; i < n.length; i++) {
    n[i] = parseInt(n[i])
    sum += n[i];
    radio *= n[i];
  }
  return radio - sum;
};

console.log(subtractProductAndSum(234));
