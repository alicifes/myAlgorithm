/**
 * @param {number[]} prices
 * @return {number}
 * @description假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？
 * @testCase [7,1,5,3,6,4] => 5 [7,6,4,3,1] => 0 [1,2] => 1 [2,1] => 0 [1,2,4] => 3
 */

const maxProfit = function (prices = []) {
    let maxPro = 0
    let minPro = prices[0]
    for(let i = 1; i< prices.length;i++){
        maxPro= Math.max(maxPro, prices[i] - minPro)
        minPro = Math.min(minPro,prices[i])
    }
    return maxPro
}

console.log(maxProfit([1,2]));