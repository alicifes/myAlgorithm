/**
 * @param {number[]} nums
 * @return {number[]}
 * @description 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
 * 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
 * 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
 */
var productExceptSelf = function (nums = []) {
  const leftArr = Array(nums.length);
  const rightArr = Array(nums.length);
  rightArr.fill(1);
  //从左到右
  leftArr[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    leftArr[i] = nums[i - 1] * leftArr[i - 1];
  }
  //从右到左
  rightArr[nums.length - 1] = 1;
  for (let j = nums.length - 1; j > 0; j--) {
    rightArr[j - 1] = rightArr[j] * nums[j];
  }
  return rightArr.map((i, index) => i * leftArr[index]);
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
