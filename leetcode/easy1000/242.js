/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @description 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (t.includes(s.charAt(i))) {
      t = t.replace(s.charAt(i), "");
    } else {
      return false;
    }
  }
  return t.length === 0;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
