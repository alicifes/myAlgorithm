/**
 * @param {number[]} nums
 * @return {number}
 * @description 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。
 * 字母和数字都属于字母数字字符。
 * 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false
 * @testCase:
 * @testCase: 输入: s = "A man, a plan, a canal: Panama"输出：true
 */

const isPalindrome = function (s) {
  return (
    s.replace(/[^A-Za-z0-9]/g, "").toLowerCase() ===
    [...s.replace(/[^A-Za-z0-9]/g, "").toLowerCase()].reverse().join("")
  );
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("ab_a"));
