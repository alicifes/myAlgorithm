/*
 * @Author: chenyuxiang
 * @Date: 2024-03-14 09:51:00
 * @LastEditTime: 2024-03-14 09:51:00
 * @LastEditors: chenyuxiang
 * @Description给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 * 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。:
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix = [[]]) {
  const n = matrix.length - 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      [matrix[i][j], matrix[n - j][n - i]] = [
        matrix[n - j][n - i],
        matrix[i][j],
      ];
    }
  }
  for (let i = 0; i < n / 2; i++) {
    [matrix[i], matrix[n - i]] = [matrix[n - i], matrix[i]];
  }
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
