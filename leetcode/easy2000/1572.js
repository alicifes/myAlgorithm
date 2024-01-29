/**
 * @param {number[][]} mat
 * @return {number}
 * @description 给你一个正方形矩阵 mat，请你返回矩阵对角线元素的和。
 * 请你返回在矩阵主对角线上的元素和副对角线上且不在主对角线上元素的和。
 */
var diagonalSum = function (mat = [[]]) {
  let totalLen = mat[0].length;
  let end = 0;
  for (let i = 0; i < totalLen; i++) {
    let first = i;
    let last = mat.length - i - 1;
    if (first !== last) {
      end += mat[i][first] + mat[i][last];
    } else {
      end += mat[i][first];
    }
  }
  return end;
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
