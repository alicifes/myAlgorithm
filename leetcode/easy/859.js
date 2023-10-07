/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 * @description 给你两个字符串 s 和 goal ，只要我们可以通过交换 s 中的两个字母得到与 goal 相等的结果，就返回 true ；否则返回 false 。
 * 交换字母的定义是：取两个下标 i 和 j （下标从 0 开始）且满足 i != j ，接着交换 s[i] 和 s[j] 处的字符。
 * 输入：s = "ab", goal = "ab"
 * 输出：false
 * 解释：你只能交换 s[0] = 'a' 和 s[1] = 'b' 生成 "ba"，此时 s 和 goal 不相等。
 * 只能交换一次
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false;
  //判断是否有两个相同的可以交换的值，如果有的话直接可以为true
  if (s === goal) {
    return s.length - new Set(s.split("")).size >= 1;
  }
  let diff = [];
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) !== goal.charAt(i)) {
      diff.push(i);
    }
  }
  if (
    diff.length === 2 &&
    s.charAt(diff[0]) === goal.charAt(diff[1]) &&
    s.charAt(diff[1]) === goal.charAt(diff[0])
  )
    return true;
  return false;
};

console.log(buddyStrings("ab", "ab"));
console.log(buddyStrings("aa", "aa")); //true
console.log(buddyStrings("abcd", "badc")); //false
console.log(buddyStrings("abcaa", "abcbb")); //false
console.log(buddyStrings("abab", "abab")); //true
