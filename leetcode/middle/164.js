/**
 * @param {number[]} nums
 * @return {number}
 * @description 给定一个无序的数组 nums，返回 数组在排序之后，相邻元素之间最大的差值
 * 如果数组元素个数小于 2，则返回 0 。
 * 您必须编写一个在「线性时间」内运行并使用「线性额外空间」的算法。
 * 输入: nums = [3,6,9,1]
 * 输出: 3
 * 解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
 */
var maximumGap = function(nums) {
    if(nums.length < 2) return 0
    nums = nums.sort((a,b) => a - b)
    let end = 0
    for(let i = 0; i < nums.length - 1; i++){
        end = Math.max(nums[i + 1] - nums[i],end)
    }
    return end
}

console.log(maximumGap([1,3,6,9]));