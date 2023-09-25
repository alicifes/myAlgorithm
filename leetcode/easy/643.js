/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @description 给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。
 * 请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。
 * 任何误差小于 10-5 的答案都将被视为正确答案。
 * @testCase nums = [1,12,-5,-6,50,3], k = 4
 */
var findMaxAverage = function (nums, k) {
  let max = nums.slice(0, k).reduce((pre, cur) => cur + pre, 0);
  let cur = max;
  for (let i = 1; i <= nums.length - k; i++) {
    cur = cur - nums[i - 1] + nums[i + k -1];
    max = Math.max(cur, max);
  }
  return max / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); //12.75
console.log(findMaxAverage([5], 1));
console.log(findMaxAverage([3, 3, 4, 3, 0], 3)); //3.33
console.log(findMaxAverage([6, 8, 6, 8, 0, 4, 1, 2, 9, 9], 2)); //
console.log(findMaxAverage([-1], 1)); //
