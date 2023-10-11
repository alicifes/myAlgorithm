/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 * @description 给你一个字符数组 letters，该数组按非递减顺序排序，以及一个字符 target。letters 里至少有两个不同的字符。
 * 返回 letters 中大于 target 的最小的字符。如果不存在这样的字符，则返回 letters 的第一个字符。
 */
var nextGreatestLetter = function (letters, target) {
  if (letters[letters.length - 1] <= target) return letters[0];
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] > target) return letters[i];
  }
};

console.log(nextGreatestLetter(["c", "f", "j"], "a"));
console.log(nextGreatestLetter(["c", "f", "j"], "j"));
