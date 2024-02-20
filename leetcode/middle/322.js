/**
 * @param {number[]} nums
 * @return {number}
 * @description 经典题目之一
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
 * 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
 * 你可以认为每种硬币的数量是无限的。
 * @testCase coins = [1, 2, 5], amount = 11 => 3
 * @testCase coins = [2], amount = 3 => -1
 * @testCase coins = [1], amount = 0 => 0
 * @testCase coins = [1], amount = 1 => 1
 * @testCase coins = [1], amount = 2 => 2
 */

const coinChange = function (coins = [], amount = 0) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      //if (i - coin >= 0) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  //console.log(dp);
  return dp[amount] === Infinity ? -1 : dp[amount];
};

 console.log(coinChange([1, 2, 5], 11)); // 3
// console.log(coinChange([2], 3)); // -1
// console.log(coinChange([1], 0)); //0
// console.log(coinChange([1], 1)); // 1
// console.log(coinChange([1, 2, 5, 10], 18)); // 4
//console.log(coinChange([186, 419, 83, 408], 6249)); // 20
