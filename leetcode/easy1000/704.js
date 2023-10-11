/**
 * @param {number[]} nums
 * @returns {number[]}
 * @description: 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，
 * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 * @Test 输入: nums = [-1,0,3,5,9,12], target = 9 输出: 4 || 输入: nums = [-1,0,3,5,9,12], target = 2 输出: -1
 */

//其实我在写这个二分查找的时候的最大问题就是没有找到合适的mid值，在找到的mid值之后要左右移动一位去掉多余的值，防止溢出以及死循环
//我特喵甚至都想到要用递归来实现，但是其实本质上使用while的情况下就是使用递归
//复杂度为O(logn)
const search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1; //同时过滤掉mid值。提升效率
    }
    if (nums[mid] > target) {
      right = mid - 1; //同上
    }
    if (nums[mid] === target) {
      return mid;
    }
  }
  return -1;
};

console.log(search([5], 5));
console.log(search([2, 5], 2));
console.log(search([-1, 0, 5], 5));


