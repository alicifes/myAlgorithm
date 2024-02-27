/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * @description 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
 */
var setZeroes = function (matrix = []) {
  let shouldZero = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        shouldZero.push([i, j]);
      }
    }
  }
  shouldZero.forEach((item) => {
    matrix[item[0]] = new Array(matrix[0].length).fill(0);
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][item[1]] = 0;
    }
  });
  return matrix;
};
// console.log(
//   setZeroes([
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ])
// );

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
