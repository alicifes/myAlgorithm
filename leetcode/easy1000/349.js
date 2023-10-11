/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @description 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
 * @testCase 输入：nums1 = [1,2,2,1], nums2 = [2,2] 输出：[2]
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]输出：[9,4]解释：[4,9] 也是可通过的
 */

const intersection = (nums1 = [], nums2 = []) => {
  const hashMap = new Map();
  nums1.forEach((item) => {
    if (!hashMap.has(item)) {
      hashMap.set(item, 0);
    }
  });
  let end = [];
  nums2.forEach((item) => {
    if (hashMap.has(item) && !end.includes(item)) {
      end.push(item);
    }
  });
  return end;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
