/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 * @description 给你三个整数数组 nums1、nums2 和 nums3 ，请你构造并返回一个 元素各不相同的 数组，且由 至少 在 两个 数组中出现的所有值组成。数组中的元素可以按 任意 顺序排列。
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  nums1 = Array.from(new Set(nums1));
  nums2 = Array.from(new Set(nums2));
  nums3 = Array.from(new Set(nums3));
  const endArr = [...nums1, ...nums2, ...nums3];
  const hashMap = new Map();
  let end = [];
  endArr.forEach((i) => {
    if (hashMap.has(i)) {
      end.push(i);
    } else {
      hashMap.set(i, 1);
    }
  });
  return Array.from(new Set(end));
};

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]));
