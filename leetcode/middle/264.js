/**
 * @param {number} n
 * @return {number}
 * @description 丑数 II
 * 给你一个整数 n ，请你找出并返回第 n 个 丑数 。丑数 就是只包含质因数 2、3, 5 的正整数
 * 输入：n = 10
 * 输出：12
 * 解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。
 * @testcase 10 => 12  1 => 1 11 => 15 1690 => 2123366400 2 => 2
 */

//三指针记住下标，来移动最小位,从而实现最小下标
const nthUglyNumber = function (n) {
  let i1 = 0;
  let i2 = 0;
  let i3 = 0;
  const dp = [1, ...new Array(n - 1)];
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(dp[i1] * 2, dp[i2] * 3, dp[i3] * 5);
    if (dp[i] === dp[i1] * 2) i1++;
    if (dp[i] === dp[i2] * 3) i2++;
    if (dp[i] === dp[i3] * 5) i3++;
  }
  return dp[n - 1];
};

console.log(nthUglyNumber(1690));
