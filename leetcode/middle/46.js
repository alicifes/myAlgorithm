/**
 * @param {number[]} nums
 * @return {number[][]}
 * @description 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * @TestCase [1,2,3] => [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * @TestCase [0,1] => [[0,1],[1,0]]
 * @TestCase [1] => [[1]]
 * @TestCase [1,2,3,4] => [[1,2,3,4],[1,2,4,3],[1,3,2,4],[1,3,4,2],[1,4,3,2],[1,4,2,3],[2,1,3,4],[2,1,4,3],[2,3,1,4],[2,3,4,1],[2,4,3,1],[2,4,1,3],[3,1,2,4],[3,1,4,2],[3,2,1,4],[3,2,4,1],[3,4,2,1],[3,4,1,2],[4,1,3,2],[4,1,2,3],[4,3,1,2],[4,3,2,1],[4,2,3,1],[4,2,1,3]]
 */

//还是使用的回溯算法，我的理解还是不够透彻
const permute = function (nums = []) {
    const res = []
    const used = [] //指示是否使用
    const path = [] //路径
    const trackBack = (a) => {
        if(a.length === nums.length){
            res.push(Array.from(path))
            return
        }
        for(let i = 0; i < nums.length; i++){
            if(used[i]) continue
            path.push(nums[i])
            used[i] = true
            trackBack(path)
            path.pop()
            used[i] = false
        }
    }
    trackBack([])
    return res
};

console.log(permute([1, 2, 3]));
