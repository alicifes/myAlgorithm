/**
 * @param {number[]} nums
 * @return {number}
 * @description 给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。
 * 输入：nums = [1,1,0,1,1,1]输出： 3 解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
 */
var findMaxConsecutiveOnes = function (nums) {
  let path = [];
  let maxLength = 0;
  for (let item of nums) {
    if (item === 1) {
      path.push(item);
      maxLength = Math.max(path.length, maxLength);
    } else {
      path = [];
    }
  }
  return maxLength
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));