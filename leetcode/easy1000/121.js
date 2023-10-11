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

//dp思想
const maxProfit = (prices = []) => {
  const n = prices.length;
  let maxPro = 0;
  let minPrice = prices[0];
  for (let i = 1; i < n; i++) {
    maxPro = Math.max(prices[i] - minPrice, maxPro);
    //找的最小的
    minPrice = Math.min(minPrice,prices[i])
  }
  return maxPro
}

//const maxProfit = function (prices = []) {
// const priLength = prices.length;
// const newArr = new Array(priLength).fill(0);
// let cur = 0;
// for (let i = priLength - 2; i >= 0; i--) {
//   cur = Math.max(prices[i + 1], cur);
//   newArr[i] = Math.max(cur, newArr[i + 1]);
// }
// console.log(newArr);
// let end = 0;
// for (let i = 0; i < priLength; i++) {
//   end = Math.max(newArr[i] - prices[i], end);
// }
// return end;
//};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1, 2])); //1
