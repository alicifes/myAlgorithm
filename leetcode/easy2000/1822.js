/**
 * @param {number[]} nums
 * @return {number}
 * @description 已知函数 signFunc(x) 将会根据 x 的正负返回特定值：]
 * 如果 x 是正数，返回 1 。
 * 如果 x 是负数，返回 -1 。
 * 如果 x 是等于 0 ，返回 0 。
 * 给你一个整数数组 nums 。令 product 为数组 nums 中所有元素值的乘积。
 * 返回 signFunc(product) 。
 */
var arraySign = function (nums = []) {
  if (nums.includes(0)) return 0;
  return nums.reduce((pre, cur) => {
    return cur < 0 ? (pre += 1) : pre;
  }, 0) %
    2 ===
    1
    ? -1
    : 1;
};

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));
console.log(arraySign([-1, 1, -1, 1, -1]));
