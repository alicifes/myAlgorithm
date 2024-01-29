/**
 * @param {number[]} nums
 * @return {number}
 * @description 给定由一些正数（代表长度）组成的数组 nums ，返回 由其中三个长度组成的、面积不为零的三角形的最大周长 。
 * 如果不能形成任何面积不为零的三角形，返回 0。
 */
var largestPerimeter = function (nums) {
  nums = nums.sort((a, b) => b - a);
  let end = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = j + 1;
    if (nums[i] < nums[j] + nums[k]) {
      return nums[i] + nums[j] + nums[k];
    }
    k++;
    if (k < nums.length) {
      j++;
      k = j + 1;
    }
  }
  return end;
};

console.log(largestPerimeter([2, 1, 2]));
console.log(largestPerimeter([1, 2, 1, 10]));
