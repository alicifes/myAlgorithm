/**
 * @param {number} n
 * @returns {number[][]} nums
 * @description给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
 * ]在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 * @testCase 输入: numRows = 5
 * 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 */

const generate = function (numRows = 1) {
  const dp = [[1]];
  for (let i = 1; i < numRows; i++) {
    let end = [];
    let past = [0, ...dp[i - 1], 0];
    for (let j = 0; j < dp[i - 1].length + 1; j++) {
      end[j] = past[j] + past[j + 1];
    }
    dp.push(end);
  }
  return dp[numRows - 1]
};

console.log(generate(5));
