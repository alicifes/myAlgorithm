/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @ 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。子数组是数组中元素的连续非空序列。
 * 输入：nums = [1,1,1], k = 2 输出：2
 */
var subarraySum = function (nums, k) {
  const n = nums.length;
  let ans = 0;
  let pre = 0;
  const map = new Map(); // 此处哈希表与题目【两数之和】思想相同
  map.set(0, 1); // 此条件不可遗漏
  for (let i = 0; i < n; ++i) {
    // 遍历以 i 结尾的子数组： (pre[i] - pre[j] === k) => (pre[i] - k === pre[j])
    pre += nums[i];
    if (map.has(pre - k)) {
      ans += map.get(pre - k);
    }
    if (map.has(pre)) {
      map.set(pre, map.get(pre) + 1);
    } else {
      map.set(pre, 1);
    }
  }
  return ans;
};

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
console.log(subarraySum([1, 2, 1, 2, 1], 3)); //4
console.log(subarraySum([1, -1, 0], 0)); //3
