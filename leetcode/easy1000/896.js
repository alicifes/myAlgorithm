/**
 * @param {number[]} nums
 * @return {boolean}
 * @description 如果数组是单调递增或单调递减的，那么它是 单调 的。
 * 如果对于所有 i <= j，nums[i] <= nums[j]，那么数组 nums 是单调递增的。 如果对于所有 i <= j，nums[i]> = nums[j]，那么数组 nums 是单调递减的。
 * 当给定的数组 nums 是单调数组时返回 true，否则返回 false。
 */
var isMonotonic = function (nums) {
  if (nums.length <= 1) return true;
  let status = null
  for (let i = 0; i < nums.length - 1; i++) {
    if(status === null){
        if(nums[i] > nums[i + 1]){
            status = 1
        }
        if(nums[i] < nums[i + 1]){
            status = 0
        }
    }
    if (nums[i] > nums[i + 1] && status === 0) {
      return false;
    }
    if (nums[i] < nums[i + 1] && status === 1) {
      return false;
    }
  }
  return true;
};

console.log(isMonotonic([1, 2, 2, 3]));
console.log(isMonotonic([1, 3, 2]));
console.log(isMonotonic([1, 1, 0]));
