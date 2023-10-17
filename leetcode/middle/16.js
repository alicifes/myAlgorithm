/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @description 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
 * 返回这三个数的和。
 * 假定每组输入只存在恰好一个解。
 * @testCase: 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2)
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
