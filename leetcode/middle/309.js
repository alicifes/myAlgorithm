/**
 * @param {number[]} prices
 * @return {number}
 * @description 给定一个整数数组prices，其中第  prices[i] 表示第 i 天的股票价格 。​
 * 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
 * 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * @testcase [1,2,3,0,2] => 3 [1] => 0 [1,2] => 1
 */

//hold手中持有股票的最大收益  unhold手中没有股票的最大收益
var maxProfit = function (prices = []) {
  const n = prices.length;
  if (n === 0 || n === 1) return 0;
  const hold = new Array(n).fill(0);
  const unhold = new Array(n).fill(0);
  hold[0] = -prices[0];
  unhold[0] = 0;
  for (let i = 1; i < n; i++) {
    if (i == 1) {
      hold[i] = Math.max(hold[i - 1], -prices[1]);
    } else {
      hold[i] = Math.max(hold[i - 1], unhold[i - 2] - prices[i]);
    }
    unhold[i] = Math.max(unhold[i - 1], hold[i - 1] + prices[i]);
  }
  //console.log(hold);
  console.log(unhold);
  return unhold[n - 1];
};

console.log(maxProfit([1, 2, 3, 0, 2])); // 3
console.log(maxProfit([1, 2, 4])); //3
console.log(maxProfit([2, 1])); //3
