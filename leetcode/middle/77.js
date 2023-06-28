/**
 * @param {number} n
 * @param {number} k，返回范围
 * @return {number[][]}
 * @description  给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 * 你可以按 任何顺序 返回答案。
 * @testCase n = 4, k = 2 => [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
 * @testCase n = 1, k = 1 => [[1]]
 * @testCase n = 3, k = 3 => [[1,2,3]]
 * @testCase n = 3, k = 2 => [[1,2],[1,3],[2,3]]
 * @testCase n = 3, k = 1 => [[1],[2],[3]]
 * @testCase n = 3, k = 0 => []
 */

const combine = function (n, k) {
    const end = []
    let left = 1
    let right = left + k
    while(left < n - k){
        for(let i = 1; i < right; i++ ){

        }
    }
}