/**
 * @param {number[]} nums
 * @return {Boolean} end
 * @description:给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
 */

const containsDuplicate = (nums = []) => {
    return nums.length !== Array.from(new Set(nums)).length
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));