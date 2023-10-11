/**
 * @param {number} n
 * @returns {number}
 * @description 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * @testCase n = 2 => 2   1 + 1, 2
 * @testCase n = 3 => 3   1 + 1 + 1, 1 + 2, 2 + 1
 * @testCase n = 4 => 5   1 + 1 + 1 + 1, 1 + 1 + 2, 1 + 2 + 1, 2 + 1 + 1, 2 + 2
 */

//简单的dp
const climbStairs = function (n) {
    const dp = []
    dp[0] = 1
    dp[1] = 2
    for(let i = 2; i < n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n - 1]
}

console.log(climbStairs(2));
console.log(climbStairs(4));