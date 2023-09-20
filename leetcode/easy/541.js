/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * @description 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
 * 如果剩余字符少于 k 个，则将剩余字符全部反转。
 * 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
 * @testCase 输入：s = "abcdefg", k = 2输出："bacdfeg
 */
var reverseStr = function (s, k) {
  let end = [];
  let curList = [];
  s = [...s];
  while (s.length >= k * 2) {
    curList = s.slice(0, k);
    s = s.slice(k);
    end = [...end, ...curList.reverse(), ...s.slice(0, k)];
    s = s.slice(k);
  }
  if (s.length < k) {
    return [...end, ...s.reverse()].join('');
  }
  if (s.length < k * 2 && s.length >= k) {
    curList = s.slice(0, k);
    s = s.slice(k);
    return [...end, ...curList.reverse(), ...s].join('');
  }
};

console.log(reverseStr("abcdefg", 2));
console.log(reverseStr("abcd", 2));
