/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 * @description 给你一个 m x n 的矩阵 M ，初始化时所有的 0 和一个操作数组 op ，其中 ops[i] = [ai, bi] 
 * 意味着当所有的 0 <= x < ai 和 0 <= y < bi 时， M[x][y] 应该加 1。
 * 在 执行完所有操作后 ，计算并返回 矩阵中最大整数的个数 。
 * @testCase 输入: m = 3, n = 3，ops = [[2,2],[3,3]]
输出: 4
解释: M 中最大的整数是 2, 而且 M 中有4个值为2的元素。因此返回 4。
 */
var maxCount = function (m, n, ops) {
  if (ops.length === 0) return m * n;
  let minA = ops[0][0];
  let minB = ops[0][1];
  for (let i = 1; i < ops.length; i++) {
    minA = Math.min(ops[i][0], minA);
    minB = Math.min(ops[i][1], minB);
  }
  return minA * minB;
};

console.log(
  maxCount(3, 3, [
    [2, 2],
    [3, 3],
  ])
);

console.log(
    maxCount(3, 3, [])
  );
