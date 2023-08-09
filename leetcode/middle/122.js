/**
 * @param {number[]} prices
 * @return {number}
 * @description  给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
 * 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
 * 返回 你能获得的 最大 利润 。
 * @testCase [1,2,3,0,2] => 3
 * @testCase [1] => 0
 * @testCase [1,2] => 1
 * @testCase [1,2,4] => 3
 * @testCase [2,1,2,0,1] => 2
 * @testCase [3,3,5,0,0,3,1,4] => 6
 * 输入：prices = [7,1,5,3,6,4]
 * 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
 * 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3 。
 * 总利润为 4 + 3 = 7 。
 */

// const maxProfit = function (prices = []) {
//     let end = 0
//     for(let i = 1; i < prices.length; i++){
//         if(prices[i-1]< prices[i]){
//             end += (prices[i] - prices[i-1])
//         }
//     }
//     return end
// }

//dp状态机的解法，构建两个数组，维持最大值的状态
const maxProfit = (prices = []) => {
    const n = prices.length
    const hand = new Array(n)
    const unhandle = new Array(n)
    hand[0] = -prices[0]
    unhandle[0] = 0
    for(let i = 1; i< prices.length;i++){
        hand[i] = Math.max(unhandle[i-1] - prices[i],hand[i-1])
        unhandle[i] = Math.max( hand[i-1] + prices[i],unhandle[i-1])
    }
    return unhandle[n-1]
}

console.log(maxProfit([1,2]));
console.log(maxProfit([7,1,5,3,6,4]));