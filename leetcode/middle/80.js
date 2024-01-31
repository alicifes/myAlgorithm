/**
 * @param {number[]} nums
 * @return {number}
 * @description 给你一个有序数组 nums ，请你原地删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */
var removeDuplicates = function (nums = []) {
  const hashMap = new Map();
  let i = 0;
  while (i < nums.length) {
    if (hashMap.has(nums[i])) {
      hashMap.set(nums[i], hashMap.get(nums[i]) + 1);
      if (hashMap.get(nums[i]) > 2) {
        nums.splice(i, 1);
      } else {
        i++;
      }
    } else {
      hashMap.set(nums[i], 1);
      i++;
    }
  }
  return nums.length;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
