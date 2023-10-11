/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @description 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。
 * 返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。
 * @testCase 输入：nums1 = [1,2,2,1], nums2 = [2,2] 输出：[2]
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]输出：[9,4]解释：[4,9] 也是可通过的
 */

const intersection = (nums1 = [], nums2 = []) => {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let end = [];
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      end.push(nums1[i]);
      i++;
      j++;
      continue;
    }
    if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return end;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersection([1, 2, 2, 1], [2]));
