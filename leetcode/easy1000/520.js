/**
 * @param {string} word
 * @return {boolean}
 * 我们定义，在以下情况时，单词的大写用法是正确的：
 * 全部字母都是大写，比如 "USA" 。
 * 单词中所有字母都不是大写，比如 "leetcode" 。
 * 如果单词不只含有一个字母，只有首字母大写， 比如 "Google" 。
 * 给你一个字符串 word 。如果大写用法正确，返回 true ；否则，返回 false 。
 * @testCase 输入：word = "USA"输出：true
 */
var detectCapitalUse = function (word) {
  return (
    word === word.toLowerCase() ||
    word === word.toUpperCase() ||
    (word.charAt(0) === word.charAt(0).toUpperCase() &&
      word.slice(1) === word.slice(1).toLowerCase())
  );
};

console.log(detectCapitalUse('USA'));
console.log(detectCapitalUse('leetcode'));
console.log(detectCapitalUse('Google'));
console.log(detectCapitalUse('GooglG'))
