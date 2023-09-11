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
  coins.sort((a, b) => a - b);
  const n = coins.length;
  let end = amount /coins[n - 1]; ;
  let elseEnd = amount % coins[n -1];
};

console.log(coinChange([1, 2, 5], 11)); // 3
