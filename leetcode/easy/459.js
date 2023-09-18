/**
 * @param {string} s
 * @return {boolean}
 * @description 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
 * 输入: s = "abab"输出: true解释: 可由子串 "ab" 重复两次构成。
 */
var repeatedSubstringPattern = function (s = "aaaa") {
  for (let i = 0; i < s.length; i++) {
    if (
      s.split(s.slice(0, i)).length > 1 &&
      s.split(s.slice(0, i)).every((i) => !i)
    )
      return true;
  }
  return false;
};

console.log(repeatedSubstringPattern("abababab"));
console.log(repeatedSubstringPattern("abbbba"));