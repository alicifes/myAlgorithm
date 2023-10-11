/**
 * @param {number[]} nums
 * @return {number[]}
 * @description 给你一个整数数组 nums，将 nums 中的的所有偶数元素移动到数组的前面，后跟所有奇数元素。
 * 返回满足此条件的 任一数组 作为答案。
 * @testCase 输入：nums = [3,1,2,4]
 * 输出：[2,4,3,1]
 * 解释：[4,2,3,1]、[2,4,1,3] 和 [4,2,1,3] 也会被视作正确答案。
 */
var sortArrayByParity = function (nums) {
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] % 2 === 0) {
  //       const cur = nums[i];
  //       nums = [cur, ...nums];
  //       nums.splice(i+1, 1);
  //     }
  //   }
  //   return nums;
  let arr1 = [];
  let arr2 = [];
  arr1 = A.filter((item) => item % 2 == 0);
  arr2 = A.filter((item) => item % 2 != 0);
  return arr1.concat(arr2);
};

console.log(sortArrayByParity([3, 1, 2, 4]));
