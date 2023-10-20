/**
 * @param {number[]} nums
 * @return {number}
 * @description:给你一个由 不同 正整数组成的数组 nums ，
 * 请你返回满足 a * b = c * d 的元组 (a, b, c, d) 的数量。
 * 其中 a、b、c 和 d 都是 nums 中的元素，且 a != b != c != d 。
 */
var tupleSameProduct = function (nums) {
  nums = Array.from(new Set(nums)).sort((a, b) => a - b);
  let endNum = 0;
  let hashMap = new Map();
  if (nums.length === 4) {
    if (nums[0] * nums[3] === nums[1] * nums[2]) {
      endNum = 1;
    }
  } else {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (hashMap.has(nums[i] * nums[j])) {
          hashMap.set(nums[i] * nums[j], hashMap.get(nums[i] * nums[j]) + 1);
        } else {
          hashMap.set(nums[i] * nums[j], 1);
        }
      }
    }
  }
  hashMap.forEach((item) => {
    if (item >= 2) {
      endNum += (item * (item - 1)) / 2;
    }
  });
  return endNum * 8;
};

console.log(tupleSameProduct([2, 3, 4, 6]));
console.log(tupleSameProduct([1, 2, 4, 5, 10]));
