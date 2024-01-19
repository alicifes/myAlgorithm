/**
 * @param {number[]} arr
 * @return {boolean}
 * @description 给你一个数字数组 arr 。
 * 如果一个数列中，任意相邻两项的差总等于同一个常数，那么这个数列就称为 等差数列 。
 * 如果可以重新排列数组形成等差数列，请返回 true ；否则，返回 false 。
 */
var canMakeArithmeticProgression = function (arr = []) {
  if (arr.length <= 2) return true;
  arr.sort((a, b) => a - b);
  const common = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== common) return false;
  }
  return true;
};

console.log(canMakeArithmeticProgression([3, 5, 1]));
console.log(canMakeArithmeticProgression([1, 2, 4]));
