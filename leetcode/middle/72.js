/*
 * @Author: chenyuxiang
 * @Date: 2024-03-18 14:20:06
 * @LastEditTime: 2024-03-18 14:20:06
 * @LastEditors: chenyuxiang
 * @Description:
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const x = word1.length;
  const y = word2.length;
  const dp = new Array(x + 1).fill(0).map(() => new Array(y + 1).fill(0));
  for (let i = 0; i <= x; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= y; j++) {
    dp[0][j] = j;
  }
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (word1[i] === word2[j]) {
        dp[i + 1][j + 1] = dp[i][j];
      } else {
        dp[i + 1][j + 1] = Math.min(dp[i][j], dp[i][j + 1], dp[i + 1][j]) + 1;
      }
    }
  }

  return dp[x][y];
};

console.log(minDistance("horse", "ros"));
