/**
 * @param {number} n
 * @return {number[]}
 * @description 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案。
 * @testCase 输入：n = 2 输出：[0,1,1] 解释：0 --> 0 1 --> 1 2 --> 10
 * @testCase  输入：n = 5 输出：[0,1,1,2,1,2] 解释：0 --> 0 1 --> 1 2 --> 10 3 --> 11 4 --> 100 5 --> 101
 */
const countBits = (n = 1) => {
  let end = [];
  for (let i = 0; i <= n; i++) {
    end.push([...i.toString(2)].filter(i => i === '1').length)
  }
  return end
};

console.log(countBits(5));
