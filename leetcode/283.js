/**
 * @param {number[]} nums
 * @returns {number[]}
 * @description:给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 * @Test 输入: nums = [0,1,0,3,12] 输出: [1,3,12,0,0]
 */

//使用冒泡来操作 复杂度O(n^2)
const moveZeroes = (nums) => {
  for (let i = nums.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (nums[j] === 0) {
        nums[j] = nums[j + 1];
        nums[j + 1] = 0;
      }
    }
  }
  return nums;
};

//by AI 复杂度O(n)
// const moveZeroes = (nums) => {
//     let index = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i]) {
//         nums[index++] = nums[i];
//         }
//     }
//     for (let i = index; i < nums.length; i++) {
//         nums[i] = 0;
//     }
//     return nums;
// };

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
