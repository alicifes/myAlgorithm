/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * @description 不同路径
 * 一个机器人位于一个 m x n 网格的左上角一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 * 问总共有多少条不同的路径？
 * @example 输入：m = 3, n = 7 输出：28
 * @example 输入：m = 3, n = 2 输出：3
 * @example 输入：m = 7, n = 3 输出：28
 * @example 输入：m = 3, n = 3 输出：6
 * @example 输入：m = 51, n = 9 输出：1916797311
 */

//dp[i][j] = dp[i-1][j] + dp[i][j-1]
const uniquePaths = function (m, n) {
  const dp = [];
  dp[0] = [1]
  for (let i = 1; i <= m; i++) {
    dp[i] = [1]
    //dp[i][0] = 1;
    for (let j = 1; j < n; j++) {
      dp[0][j] = 1;
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
console.log(uniquePaths(3, 7));
console.log(uniquePaths(1, 2));
