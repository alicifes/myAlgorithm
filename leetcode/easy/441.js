/**
 * @param {number} n
 * @return {number}
 * @description:你总共有 n 枚硬币，并计划将它们按阶梯状排列。对于一个由 k 行组成的阶梯，其第 i 行必须正好有 i 枚硬币。阶梯的最后一行 可能 是不完整的。
 *给你一个数字 n ，计算并返回可形成 完整阶梯行 的总行数。
 * @testCase:
 */
const arrangeCoins = function(n) {
    let end = 0
    for(let i = 1;;i++){
        n-= i
        end ++
        if(n< i+ 1){
            return i
        }
    }
};

//console.log(arrangeCoins(5))
console.log(arrangeCoins(8))
