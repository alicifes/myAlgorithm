/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * @description 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 * 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
 * 输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 */

//姑且可以 ，timeout
var findAnagrams = function (s, p) {
  //   const pLength = p.length;
  //   p = [...p].sort().join("");
  //   console.log(p);
  //   const end = [];
  //   for (let i = 0; i <= s.length - pLength; i++) {
  //     let cur = s.slice(i, i + pLength);
  //     cur = [...cur].sort().join("");
  //     if (cur === p) {
  //       end.push(i);
  //     }
  //   }
  //   return end;
};

console.log(findAnagrams("cbaebabacd", "abc"));
