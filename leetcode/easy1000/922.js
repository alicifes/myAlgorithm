/**
 * @param {number[]} nums
 * @return {number[]}
 * @description
 * 给定一个非负整数数组 nums，  nums 中一半整数是 奇数 ，一半整数是 偶数 。
 * 对数组进行排序，以便当 nums[i] 为奇数时，i 也是 奇数 ；当 nums[i] 为偶数时， i 也是 偶数 。
 * 你可以返回 任何满足上述条件的数组作为答案 。
 */
var sortArrayByParityII = function (nums) {
  //   const oddArr = [];
  //   const evenArr = [];
  //   nums
  //     .sort((a, b) => a - b)
  //     .forEach((i) => {
  //       i % 2 === 0 ? evenArr.push(i) : oddArr.push(i);
  //     });
  //   const end = [];
  //   for (let i = 0; i < oddArr.length; i++) {
  //     end.push(evenArr[i]);
  //     end.push(oddArr[i]);
  //   }
  //   return end;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
