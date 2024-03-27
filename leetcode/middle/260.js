/**
 * @param {number[]} nums
 * @return {number[]}
 * @description 给你一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。你可以按 任意顺序 返回答案。
 * 你必须设计并实现线性时间复杂度的算法且仅使用常量额外空间来解决此问题。
 */
var singleNumber = function (nums) {
  if (nums.length === 2) return nums;
  let hashMap = new Map();
  for (let i of nums) {
    if (hashMap.has(i)) {
      hashMap.set(i, hashMap.get(i) + 1);
    } else {
      hashMap.set(i, 1);
    }
  }
  let end = [];
  hashMap.forEach((value, key) => {
    if (value === 1) end.push(key);
  });
  return end;
};