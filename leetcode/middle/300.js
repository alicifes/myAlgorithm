/**
 * @param {number[]} nums
 * @return {number}
 * @description 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。
例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 */
var lengthOfLIS = function (nums = []) {
  let n = nums.length;
  let arr = new Array(n);
  arr.fill(1);
  let max = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        arr[i] = Math.max(arr[j] + 1, arr[i]);
      }
    }

    max = Math.max(max, arr[i]);
  }
  return max;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); //4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); //4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); //1
console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6])); //6
