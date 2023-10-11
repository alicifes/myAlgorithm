/**
 * @param {number[]} nums
 * @return {number}
 * @description 给你一个整数数组 nums ，其中总是存在 唯一的 一个最大整数 。
 * 请你找出数组中的最大元素并检查它是否 至少是数组中每个其他数字的两倍 。如果是，则返回 最大元素的下标 ，否则返回 -1 。
 * @testCase 输入：nums = [3,6,1,0]
 * 输出：1
 * 解释：6 是最大的整数，对于数组中的其他整数，6 至少是数组中其他元素的两倍。6 的下标是 1 ，所以返回 1 。
 */
var dominantIndex = function (nums) {
  if (nums.length === 1) return 0;
  let maxIndex = 0;
  let cur = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (cur < nums[i]) {
      cur = Math.max(cur, nums[i]);
      maxIndex = i;
    }
  }
  const sortArr = Array.from(nums.sort((a, b) => a - b));
  return cur >= sortArr[sortArr.length - 2] * 2 ? maxIndex : -1;
};

console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 2, 3, 4]));
console.log(dominantIndex([1]));
console.log(dominantIndex([0, 0, 3, 2])); // -1
