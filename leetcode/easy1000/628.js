/**
 * @param {number[]} nums
 * @return {number}
 * @description 给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
 * @testCase 输入：nums = [1,2,3,4] 输出：24
 */
var maximumProduct = function (nums) {
  nums.sort((a, b) => a - b);
  const numLength = nums.length;
  let max = nums[numLength - 1];
  nums.splice(numLength - 1, 1);
  return Math.max(
    max * nums[0] * nums[1],
    max * nums[nums.length - 1] * nums[nums.length - 2]
  );
};

console.log(maximumProduct([1, 2, 3, 4]));
console.log(maximumProduct([-8, -7, 3, 4]));
console.log(maximumProduct([-8, 7, 3, 4]));
