/**
 * @param {number[]} nums
 * @return {number[][]}
 * @description 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 * @testCase [1,2,3] => [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * @testCase [0] => [[],[0]]
 * @testCase [1,2,3,4] => [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3],[4],[1,4],[2,4],[1,2,4],[3,4],[1,3,4],[2,3,4],[1,2,3,4]]
 */

const subsets = function (nums = []) {
  const router = [];
  const end = [];
  const trackBack = (cur) => {
    end.push([...router]);
    if (router.length === nums.length) return;
    for (let i = cur; i < nums.length; i++) {
      router.push(nums[i]);
      trackBack(i + 1);
      router.pop();
    }
  };
  trackBack(0)
  return end
};
console.log(subsets([1,2,3]));

