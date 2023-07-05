/**
 * @param {number[]} nums
 * @return {number[][]}
 * @description 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
 * 解集 不能包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
 * @testCase [1,2,2] => [[],[1],[1,2],[1,2,2],[2],[2,2]]
 * @testCase [0] => [[],[0]]
 * @testCase [4,4,4,1,4] => [[],[1,[1,4],[1,4,4],[1,4,4,4],[1,4,4,4,4],[4],[4,4],[4,4,4],[4,4,4,4]]
 */

const subsetsWithDup = function (nums = []) {
  nums = nums.sort((a, b) => a - b);
  const end = [];
  const router = [];
  const trackBack = (cur) => {
    end.push([...router]);
    if (router.length === nums.length) return;
    for (let i = cur; i < nums.length; i++) {
      if (i!== cur && nums[i] === nums[i - 1]) continue; //表示当前的集合被使用
      //if (nums[i] === nums[i - 1]) continue; //表示当前的集合被使用
      router.push(nums[i]);
      trackBack(i + 1);
      router.pop();
    }
  };
  trackBack(0);
  return end;
};

console.log(subsetsWithDup([4, 4, 4, 1, 4]));
