/**
 * @param {number[]} nums
 * @return {number[][]}
 * @description 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个下标。
 * @testCase [2,3,1,1,4] => true
 * @testCase [3,2,1,0,4] => false
 * @testCase [0] => true
 * @testCase [1,0,1,0] => false
 * @testCase [1,1,1,0] => true
 */

const canJump = function (nums = []) {
    const hashMap = []
};

// console.log(canJump([2, 3, 1, 1, 4]));
// console.log(canJump([3, 2, 1, 0, 4]));
// console.log(canJump([0]));
// console.log(canJump([1, 0, 1, 0]));
// console.log(canJump([1, 1, 1, 0]));
// console.log(canJump([2, 5, 0, 0]));
console.log(canJump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0])); //true
