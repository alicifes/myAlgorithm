/**
 * @param {number[][]} matrix
 * @return {number[]}
 * @description 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 */
var spiralOrder = function (matrix = []) {
  if (matrix.length === 0) return [];
  let end = [];
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) end.push(matrix[top][i]);
    top++;
    for (let i = top; i <= bottom; i++) end.push(matrix[i][right]);
    right--;
    if (left > right || bottom < top) break;
    for (let i = right; i >= left; i--) end.push(matrix[bottom][i]);
    bottom--;
    for (let i = bottom; i >= top; i--) end.push(matrix[i][left]);
    left++;
  }
  return end;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
