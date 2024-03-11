/*
 * @Author: chenyuxiang
 * @Date: 2024-03-11 08:56:36
 * @LastEditTime: 2024-03-11 08:56:36
 * @LastEditors: chenyuxiang
 * @Description: 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。
 * 你必须设计并实现线性时间复杂度的算法且使用常数级空间来解决此问题。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums = []) {
  const hashMap = new Map();
  for (i of nums) {
    if (hashMap.has(i)) {
      hashMap.set(i, hashMap.get(i) + 1);
    } else {
      hashMap.set(i, 1);
    }
  }
  let end = 0;
  hashMap.forEach((value, key) => {
    if (value === 1) end = key;
  });
  return end;
};

console.log(singleNumber([2, 2, 3, 2]));
