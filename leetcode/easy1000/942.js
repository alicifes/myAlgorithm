/**
 * @param {string} s
 * @return {number[]}
 * @description 由范围 [0,n] 内所有整数组成的 n + 1 个整数的排列序列可以表示为长度为 n 的字符串 s ，其中:
 * 如果 perm[i] < perm[i + 1] ，那么 s[i] == 'I'
 * 如果 perm[i] > perm[i + 1] ，那么 s[i] == 'D'
 * 给定一个字符串 s ，重构排列 perm 并返回它。如果有多个有效排列perm，则返回其中 任何一个 。
 * 输入：s = "III"
 * 输出：[0,1,2,3]
 */
var diStringMatch = function (s) {
  let endArr = [];
  let min = 0;
  let max = s.length;
  for (let i = 0; i < s.length + 1; i++) {
    if (s[i] === "D") {
      endArr.push(max);
      max--;
    }
    if (s[i] === "I") {
      endArr.push(min);
      min++;
    }
  }
  endArr.push(max)
  return endArr;
};

console.log(diStringMatch("III"));
console.log(diStringMatch("IDID"));
