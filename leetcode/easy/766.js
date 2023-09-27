/**
 * @param {number[][]} matrix
 * @return {boolean}
 * @description 给你一个 m x n 的矩阵 matrix 。如果这个矩阵是托普利茨矩阵，返回 true ；否则，返回 false 。
 * 如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 托普利茨矩阵 。
 */

//每一次都移动一位即可
var isToeplitzMatrix = function (
  matrix = [
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ]
) {
  for (let i = 0; i < matrix.length - 1; i++) {
    console.log(matrix[i].slice(0, -1).join(""));
    console.log(matrix[i + 1].slice(1).join(""));
    if (matrix[i].slice(0, -1).join("") !== matrix[i + 1].slice(1).join("")) {
      return false;
    }
  }
  return true;
};

console.log(
  isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ])
);

console.log(
  isToeplitzMatrix([
    [1, 2],
    [2, 2],
  ])
);
