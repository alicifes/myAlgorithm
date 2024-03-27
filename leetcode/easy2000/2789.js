/*
 * @Author: chenyuxiang
 * @Date: 2024-03-14 09:24:22
 * @LastEditTime: 2024-03-14 09:24:22
 * @LastEditors: chenyuxiang
 * @Description: 给你一个下标从 0 开始、由正整数组成的数组 nums 。
 * 你可以在数组上执行下述操作 任意 次：
 * 选中一个同时满足 0 <= i < nums.length - 1 和 nums[i] <= nums[i + 1] 的整数 i 。
 * 将元素 nums[i + 1] 替换为 nums[i] + nums[i + 1] ，并从数组中删除元素 nums[i] 。
 * 返回你可以从最终数组中获得的 最大 元素的值。
 * @param {number[]} nums
 * @return {number}
 */
var maxArrayValue = function (nums = []) {
  let i = nums.length;
  while (i >= 0) {
    if (nums[i] <= nums[i + 1]) {
      nums[i + 1] = nums[i] + nums[i + 1];
      nums.splice(i, 1);
    }
    i--;
  }
  return Math.max(...nums);
};

console.log(maxArrayValue([2, 3, 7, 9, 3]));
console.log(maxArrayValue([5, 3, 3]));
