const { log } = require("console");

/*
 * @Author: chenyuxiang
 * @Date: 2024-01-05 08:37:39
 * @LastEditTime: 2024-01-05 08:37:39
 * @LastEditors: chenyuxiang
 * @Description:给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。
 * 完全平方数 是一个整数，其值等于另一个整数的平方；
 * 换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。:
 * @testCase: 输入：n = 12 输出：3 解释：12 = 4 + 4 + 4
 */
const numSquares = (n) => {
  const dp = [];
  const hashSource = [];
  for (let i = 2; i * i <= n; i++) {
    if (i * i === n) return n;
    hashSource.push(i * i);
  }
  if (hashSource.length <= 1) return 0;
  hashSource.reverse();
  for (let i = 0; i < hashSource.length; ) {
    dp.push(hashSource[i]);
    if (dp.reduce((pre, cur) => pre + cur, 0) > n) {
      console.log("inner");
      dp.pop();
      i++;
      if (i === hashSource.length) {
      }
    }
    if (dp.reduce((pre, cur) => pre + cur, 0) === n) {
      console.log(dp);
      return dp.length;
    }
  }
  return n;
};

console.log(numSquares(12));
