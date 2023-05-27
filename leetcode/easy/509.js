/**
 * @param {number} N
 * @return {number}
 * @description: 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。
 * 该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 * F(0) = 0，F(1) = 1 F(n) = F(n - 1) + F(n - 2)，其中 n > 1
 * @Test 输入：2 输出：1 || 输入：3 输出：2 || 输入：4 输出：3
 */

//暴力递归
// const fib = function (N) {
//   if (N === 0) return 0;
//   if ([1, 2].includes(N)) return 1;
//   return fib(N-1) + fib(N-2)
// };

//byAI 非递归，感觉不太好 复杂度为O(n)
// const fib = function (N) {
//     if (N === 0) return 0;
//     if ([1, 2].includes(N)) return 1;
//     let first = 1;
//     let second = 1;
//     for (let i = 3; i <= N; i++) {
//         const sum = first + second;
//         first = second;
//         second = sum;
//     }
//     return second;
// };

//使用滚动数组优化,暂存下来
const fib = (n) => {
    if (n <= 1) return n;
    //滚动数组 dp[i]只和dp[i-1]、dp[i-2]相关，只维护长度为2的滚动数组，不断替换数组元素
    const dp = [0, 1];
    let sum = null;
    for (let i = 2; i <= n; i++) {
        sum = dp[0] + dp[1];
        dp[0] = dp[1];
        dp[1] = sum;
    }
    return sum;
};

console.log(fib(4));
