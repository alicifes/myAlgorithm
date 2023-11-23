/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 * @description 给你一个下标从 0 开始的整数数组 nums 和一个整数 threshold 。
 * 请你从 nums 的子数组中找出以下标 l 开头、下标 r 结尾 (0 <= l <= r < nums.length)
 * 且满足以下条件的 最长子数组 ：
 * nums[l] % 2 == 0
 * 对于范围 [l, r - 1] 内的所有下标 i ，nums[i] % 2 != nums[i + 1] % 2
 * 对于范围 [l, r] 内的所有下标 i ，nums[i] <= threshold
 * 以整数形式返回满足题目要求的最长子数组的长度。
 * 注意：子数组 是数组中的一个连续非空元素序列。
 */
var longestAlternatingSubarray = function (nums, threshold) {
  let endArr = [];
  let end = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && nums[i] <= threshold) {
      endArr.push(nums[i]);
      let right = i + 1;
      while (right < nums.length) {
        if (
          nums[right] % 2 !== nums[right - 1] % 2 &&
          nums[right] <= threshold
        ) {
          endArr.push(nums[right]);
          right++;
        } else {
          end = Math.max(end, endArr.length);
          endArr = [];
          if(right === nums.length) return end
          break;
        }
      }
    } else {
      end = Math.max(end, endArr.length);
      endArr = [];
    }
  }
  end = Math.max(end, endArr.length);
  return end;
};

console.log(longestAlternatingSubarray([3, 2, 5, 4], 5));
console.log(longestAlternatingSubarray([2, 3, 4, 5], 4));
console.log(longestAlternatingSubarray([1, 2], 2));
console.log(longestAlternatingSubarray([2, 2], 18)) // 1
