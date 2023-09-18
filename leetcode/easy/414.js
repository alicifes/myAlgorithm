/**
 * @param {number []} nums
 * @returns {number}
 * @description: returnThirdNumber 
 */

const returnThirdNumber = (nums = []) => {
  nums = Array.from(new Set(nums.sort((a, b) => b - a)));
  if (nums.length >= 3) return nums[2];
  return nums[0];
};

console.log(returnThirdNumber([2, 2, 3, 1]));
console.log(returnThirdNumber([1, 2]));
console.log(returnThirdNumber([3, 2, 1]));
