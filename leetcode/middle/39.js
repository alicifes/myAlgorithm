/**
 * @param {number[]} candidates
 * @return {number[][]}
 * @description 给你一个无重复元素的整数数组 candidates 和一个目标整数 target ，
 * 找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。
 * candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。
 * 对于给定的输入，保证和为 target 的不同组合数少于 150 个。
 * @TestCase [2,3,6,7],7 => [[2,2,3],[7]]
 * @TestCase [2,3,5],8 => [[2,2,2,2],[2,3,3],[3,5]]
 * @TestCase [2],1 => []
 * @TestCase [1],1 => [[1]]
 */

const combinationSum = function (candidates = [], target) {
  //该算法使用回溯算法来操作,穷举遍历全部的集合
  const end = [];
  const router = [];
  //回溯
  const backtrack = (startIndex,sum) => {
    //如果和相同
    if(sum  === target){
        end.push([...router])
        //这里是否使用return无所谓，因为下一步肯定会走出循环
    }
    for (let i = startIndex; i < candidates.length; i++) {
        // 剪枝
        if(candidates[i]+sum > target) return;
        router.push(candidates[i]);
        backtrack(i, sum + candidates[i]);
        router.pop()
      }
  };
  backtrack(0,0)
  return end
};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5 ], 8));
