/**
 * @param {number[]} prices
 * @return {number}
 * @description 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。
 * 设计一个算法来计算你所能获取的最大利润。
 * 返回你可以从这笔交易中获取的最大利润。
 * 如果你不能获取任何利润，返回 0 。
 * @testCase [7,1,5,3,6,4] => 5
 * @testCase [7,6,4,3,1] => 0
 */

const maxProfit = function (prices = []) {
  let left = 0;
  let end = 0;
  while (left < prices.length - 1) {
    for (let i = left + 1; i < prices.length - 1; i++) {
      end = Math.max(prices[i] - prices[left], end);
    }
    left++;
  }
  return end;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1, 2])); //1
