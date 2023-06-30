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

//还是使用回溯算法，通过移动
const combine = function (n, k) {
  const end = [];
  let current = [];
  const trackBack = (cur) => {
    if (current.length === k) {
      end.push([...current]);
      return;
    }
    for (let i = cur; i < n; i++) {
      current.push(i + 1);
      trackBack(i + 1);
      current.pop();
    }
  };
  trackBack(0);
  return end;
};

console.log(combine(3, 3));
