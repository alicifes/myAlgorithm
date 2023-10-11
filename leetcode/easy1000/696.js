/**
 * @param {string} s
 * @return {number}
 * @description 给定一个字符串 s，统计并返回具有相同数量 0 和 1 的非空（连续）子字符串的数量，并且这些子字符串中的所有 0 和所有 1 都是成组连续的。=
 * 重复出现（不同位置）的子串也要统计它们出现的次数。
 * @testCase s = "00110011"输出：6
 * 解释：6 个子串满足具有相同数量的连续 1 和 0 ："0011"、"01"、"1100"、"10"、"0011" 和 "01" 。
 * 注意，一些重复出现的子串（不同位置）要统计它们出现的次数。
 * 另外，"00110011" 不是有效的子串，因为所有的 0（还有 1 ）没有组合在一起。
 */
var countBinarySubstrings = function (s) {
  let end = 0;
  let cur = [];
  for (let i = 0; i < s.length; i++) {
    cur = [s.charAt(i)];
    let isReverse = false;
    for (let j = i + 1; j < s.length; j++) {
      if (cur[cur.length - 1] !== s.charAt(j) && isReverse) {
        continue;
      }
      if (cur[cur.length - 1] !== s.charAt(j) && !isReverse) {
        isReverse = true;
      }
      if (isReverse) {
        if (parseInt(cur.join('')) & (parseInt(cur.reverse().join('')) === 0)) {
          end++;
          continue;
        }
        cur.reverse();
      }
      cur.push(s.charAt(j));
    }
  }
  return end;
};

console.log(countBinarySubstrings("00110011"));
