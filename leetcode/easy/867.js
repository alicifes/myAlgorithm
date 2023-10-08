/**
 * @param {number[][]} matrix
 * @return {number[][]}
 * @description 给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。
 * 矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
 * @testCase 示例 1： 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]] 输出：[[1,4,7],[2,5,8],[3,6,9]]
 */

var transpose = function (matrix) {
  let end = [];
  const len = matrix[0].length;
  const aLen = matrix.length;
  for (let i = 0; i < len; i++) {
    let arr = [];
    for (let j = 0; j < aLen; j++) {
      arr.push(matrix[j][i]);
    }
    end.push(arr);
  }
  return end;
};

//console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
