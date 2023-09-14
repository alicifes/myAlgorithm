/**
 * @param {string} s
 * @return {number}
 * @description 给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串 。
 * 在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。
 * 输入:s = "abccccdd"输出:7解释:我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 * 输入:s = "aaaaaccc"输出:7
 */
var longestPalindrome = function (s) {
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.slice(i).replace(s.charAt(i), "").length !== s.slice(i)) {
      s = s.slice(0, i) + s.slice(i).replace(s.charAt(i), "");
      end += 2
    }
    console.log(s);
  }
  return end
};

console.log(longestPalindrome("aaaaaccc"));
