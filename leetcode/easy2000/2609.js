/**
 * @param {string} s
 * @return {number}
 * @description给你一个仅由 0 和 1 组成的二进制字符串 s 。
 * 如果子字符串中 所有的 0 都在 1 之前 且其中 0 的数量等于 1 的数量，
 * 则认为 s 的这个子字符串是平衡子字符串。请注意，空子字符串也视作平衡子字符串。
 * 返回  s 中最长的平衡子字符串长度。
 * 子字符串是字符串中的一个连续字符序列。
 */
var findTheLongestBalancedSubstring = function (s) {
  let zero = 0;
  let one = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    // console.log("zero", zero);
    // console.log("one", one);
    // console.log("end", end);
    if (s.charAt(i) === "0" && one === 0) {
      zero++;
      continue;
    }
    if (s.charAt(i) === "0" && one !== 0) {
      let cur = Math.min(zero, one);
      end = Math.max(end, cur);
      zero = 1;
      one = 0;
      continue;
    }
    if (s.charAt(i) === "1" && zero === 0) {
      zero = 0;
      one = 0;
      continue;
    }
    if (s.charAt(i) === "1" && zero !== 0) {
      one++;
      continue;
    }
  }
  if (one !== 0) {
    let cur = Math.min(zero, one);
    end = Math.max(end, cur);
  }
  return end * 2;
};

console.log(findTheLongestBalancedSubstring("01000111"));
console.log(findTheLongestBalancedSubstring("111"));
