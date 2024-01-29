/**
 * @param {number[][]} matrix
 * @return {number[]}
 * @description 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 */
var spiralOrder = function(matrix = [[]]) {
    let end = []
    while(matrix.length === 0){
        for(let i = 0; i < matrix[0]; i ++){
            end.push(matrix[i])
        }
    }
}