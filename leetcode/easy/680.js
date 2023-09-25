/**
 * @param {string} s
 * @return {boolean}
 * @description 给你一个字符串 s，最多 可以从中删除一个字符。
 * 请你判断 s 是否能成为回文字符串：如果能，返回 true ；否则，返回 false 。
 * @testCase 输入：s = "aba"输出：true
 * @testCase 输入：s = "abca" 输出：true 解释：你可以删除字符 'c' 。
 */
var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s.charAt(left) !== s.charAt(right)) {
      return (
        valididateMore(s.slice(left + 1, right + 1)) ||
        valididateMore(s.slice(left, right))
      );
    } else if (s.charAt(left) !== s.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const valididateMore = (s) => {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s.charAt(left) !== s.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

//console.log(validPalindrome("aba"));
console.log(validPalindrome("abca"));
console.log(validPalindrome("abc"));
console.log(validPalindrome("cbbcc"));
