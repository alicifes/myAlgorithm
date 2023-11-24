/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @description 给你一个下标从 0 开始长度为 n 的整数数组 nums 和一个整数 target ，
 * 请你返回满足 0 <= i < j < n 且 nums[i] + nums[j] < target 的下标对 (i, j) 的数目。
 */
var countPairs = function(nums, target) {
    let end = 0
    for(let i = 0; i < nums.length; i ++){
        let right = i + 1
        while(right < nums.length){
            if(nums[right] + nums[i] < target) end ++
            right ++
        }
    }
    return end
}

console.log(countPairs([-1,1,2,3,1],2));
console.log(countPairs([-6,2,5,-2,-7,-1,3],-2));