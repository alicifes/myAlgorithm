/**
 * @param {number[]} nums
 * @return {number}
 * @description 给你一个整数数组 nums ，该数组具有以下属性：
 * nums.length == 2 * n.
 * nums 包含 n + 1 个 不同的 元素
 * nums 中恰有一个元素重复 n 次
 * 找出并返回重复了 n 次的那个元素。
 * @testCase [1,2,3,3] 3
 */
var repeatedNTimes = function (nums) {
  const hashMap = new Map();
  const numLength = nums.length;
  for (let i = 0; i < numLength; i++) {
    hashMap.has(nums[i])
      ? hashMap.set(nums[i], hashMap.get(nums[i]) + 1)
      : hashMap.set(nums[i], 1);
    if (hashMap.get(nums[i]) === numLength / 2) {
      return nums[i];
    }
  }
};

console.log(repeatedNTimes([1, 2, 3, 3]));
