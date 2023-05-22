/**
 * @param {number[]} nums
 * @returns {number[]}
 * @description: 冒泡排序
 */

const bubbleSort = (nums = []) => {
  for (let i = nums.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        const middle = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = middle;
      }
    }
  }
  return nums
};

console.log(bubbleSort([2,3,4,5,6,7,8,9]));

//power by AI
// const bubbleSort2 = (nums = []) => {
//     for (let i = nums.length; i > 0; i--) {
//         for (let j = 0; j < i; j++) {
//         if (nums[j] > nums[j + 1]) {
//             const middle = nums[j];
//             nums[j] = nums[j + 1];
//             nums[j + 1] = middle;
//         }
//         }
//     }
//     return nums
//     }
// }