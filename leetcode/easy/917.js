/**
 * @param {string} s
 * @return {string}
 * @description 给你一个字符串 s ，根据下述规则反转字符串：
 * 所有非英文字母保留在原有位置。
 * 所有英文字母（小写或大写）位置反转。
 * 返回反转后的 s 。
 */
var reverseOnlyLetters = function (s) {
  let left = 0;
  let right = s.length - 1;
  s = [...s];
  while (left < right) {
    if (s[left].replace(/[A-Za-z]/, "") !== "") {
      left++;
    }
    if (s[right].replace(/[A-Za-z]/, "") !== "") {
      right--;
    }
    if (
      s[left].replace(/[A-Za-z]/, "") === "" &&
      s[right].replace(/[A-Za-z]/, "") === ""
    ) {
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
    }
  }
  return s.join("");
};

console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
