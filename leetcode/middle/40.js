/**
 * @param {number[]} candidates
 * @return {number[][]}
 * @description 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的每个数字在每个组合中只能使用 一次 。
 * 注意：解集不能包含重复的组合。 
 * @TestCase [10,1,2,7,6,1,5],8 => [[1,1,6],[1,2,5],[1,7],[2,6]]
 * @TestCase [2,5,2,1,2],5 => [[1,2,2],[5]]
 * @TestCase [2],1 => []
 */

const combinationSum2 = function (candidates = [], target) {
    const end = []
    const router = []
    candidates = candidates.sort((a,b) => a - b)
    const backtrack = (curIndex,sum) => {
        if(sum === target){
            end.push([...router])
        }
        for(let i = curIndex ;i< candidates.length ; i++){
            if(sum + candidates[i] > target) return
            router.push(candidates[i])
            backtrack(i + 1,sum + candidates[i])
            //去重,控制下一位操作不重复
            while(i < candidates.length && candidates[i] === candidates[i+1]) i++
            router.pop()
        }
    }
    backtrack(0,0)
    return end
}

console.log(combinationSum2([10,1,2,7,6,1,5],8));
console.log(combinationSum2([2,5,2,1,2],5));