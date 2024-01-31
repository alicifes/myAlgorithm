/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * @description 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 */
var rotate = function (nums = [], k) {
  const totalLength = nums.length;
  let endNum = new Array(totalLength);
  const curMove = k % totalLength;
  for (let i = 0; i < curMove; i++) {
    if (i + curMove >= nums.length) {
      move = i + curMove - nums.length;
      endNum[move] = nums[i];
    } else {
      endNum[i + curMove] = nums[i];
    }
  }
  return endNum;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1,-100,3,99], 2));
