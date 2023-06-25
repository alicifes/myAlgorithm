/**
 * @param {number[]} nums
 * @return {number[][]}
 * @description 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 * @TestCase [1,1,2] => [[1,1,2],[1,2,1],[2,1,1]]
 * @TestCase [1,2,3] => [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * @TestCase [0,1] => [[0,1],[1,0]]
 */

//还是回溯算法的框架，但是这里是需要过滤掉相同的
//这里使用 前后两个值相同且该值已被使用对出现过的数据进行过滤
//nums[i] === nums[i - 1] && used[i - 1] 即代表当前元素同一树层nums[i - 1]使用过，
const permuteUnique = function (nums = []) {
  const used = [nums.length].fill(false);
  const path = [];
  const end = [];
  nums.sort((a,b)=>a-b);
  const trackBack = (a) => {
    if (a.length === nums.length) {
      end.push([...a]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i] || (nums[i] === nums[i-1] && !used[i-1])) continue;
      used[i] = true;
      path.push(nums[i]);
      trackBack(path);
      path.pop();
      used[i] = false;
    }
  };
  trackBack([]);
  return end;
};

//console.log(permuteUnique([1, 1, 2]));
//console.log(permuteUnique([1,2,3]));
console.log(permuteUnique([3,3,0,3]));
