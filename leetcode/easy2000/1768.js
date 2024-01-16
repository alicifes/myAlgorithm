/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 * @description 给你两个字符串 word1 和 word2 。请你从 word1 开始，通过交替添加字母来合并字符串。如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后字符串的末尾。
 * 返回 合并后的字符串 。
 */
var mergeAlternately = function (word1, word2) {
  let index = 0;
  let endArr = "";
  while (index < Math.min(word1.length, word2.length)) {
    endArr += word1.charAt(index) + word2.charAt(index);
    index++;
  }
  if (index < word1.length) {
    endArr += word1.slice(index, word1.length);
  }
  if (index < word2.length) {
    endArr += word2.slice(index, word2.length);
  }
  return endArr;
};

console.log(mergeAlternately("abcd", "pq"));
