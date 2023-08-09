/**
 * @param {number[]} prices
 * @return {number}
 * @description 给定一个数组 prices ，其中第 i 个元素代表了第 i 天的股票价格 ；非负整数 fee 代表了交易股票的手续费用。
 * 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，
 * 在卖出它之前你就不能再继续购买股票了。返回获得利润的最大值。
 * @testCase [1, 3, 2, 8, 4, 9], fee = 2 => 8
 * @testCase [1, 3, 7, 5, 10, 3], fee = 3 => 6
 * @testCase [1, 4, 6, 2, 8, 3, 10, 14], fee = 3 => 13
 * @testCase [4, 5, 2, 4, 3, 3, 1, 2, 5, 4], fee = 1 => 4
 * @testCase [2, 1, 4, 4, 2, 3, 2, 5, 1, 2], fee = 1 => 4
 * @testCase [1, 3, 2, 8, 4, 9], fee = 2 => 8
 */

const maxProfit = function (prices = [], fee = 0) {
  const n = prices.length;
  if (n === 0 || n === 1) return 0;
  const hold = new Array(n).fill(0);
  const unhold = new Array(n).fill(0);
  hold[0] = -prices[0] - fee;
  unhold[0] = 0;
  for (let i = 1; i < n; i++) {
    hold[i] = Math.max(hold[i - 1], unhold[i - 1] - prices[i] - fee);
    unhold[i] = Math.max(hold[i - 1] + prices[i] , unhold[i - 1]);
  }
  //console.log(unhold);
  return unhold[n - 1];
};

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2)); //8
console.log(maxProfit([1, 3, 7, 5, 10, 3], 3)); //6
