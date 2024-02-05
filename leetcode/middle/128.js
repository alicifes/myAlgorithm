/**
 * @param {number[]} nums
 * @return {number}
 * @description 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 * 使用set结构来实现
 */
var longestConsecutive = function (nums) {
  let max = 0;
  nums = new Set(nums);
  for (let value of nums) {
    let cur = value;
    if (nums.has(value - 1)) continue;
    while (nums.has(cur + 1)) {
      nums.delete(cur + 1);
      cur++;
    }
    max = Math.max(max, cur - value + 1);
  }
  return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); //
console.log(longestConsecutive([0])); //1
