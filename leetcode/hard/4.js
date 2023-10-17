/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * @description 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 * @testCase 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let allLength = nums1.length + nums2.length;
  let curIndex = 1;
  let index1 = 0;
  let index2 = 0;
  let arr = [];
  if (allLength % 2 === 0) {
    //偶数
    while (curIndex <= allLength / 2 + 1) {
      if (index1 === nums1.length) {
        nums1[index1] = Infinity;
      }
      if (index2 === nums2.length) {
        nums2[index2] = Infinity;
      }
      if (nums1[index1] <= nums2[index2]) {
        arr.push(nums1[index1]);
        index1++;
      } else {
        arr.push(nums2[index2]);
        index2++;
      }
      curIndex++;
    }
    return (arr[arr.length - 1] + arr[arr.length - 2]) / 2;
  } else {
    while (curIndex <= parseInt(allLength / 2) + 1) {
      if (index1 === nums1.length) {
        nums1[index1] = Infinity;
      }
      if (index2 === nums2.length) {
        nums2[index2] = Infinity;
      }
      if (nums1[index1] <= nums2[index2]) {
        arr.push(nums1[index1]);
        index1++;
      } else {
        arr.push(nums2[index2]);
        index2++;
      }
      curIndex++;
    }
    return arr[arr.length - 1];
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([2], []));
console.log(findMedianSortedArrays([3, 4], []));
console.log(findMedianSortedArrays([100001], [100000]));
