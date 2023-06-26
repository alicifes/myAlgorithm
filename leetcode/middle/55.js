/**
 * @param {number[]} nums
 * @return {number[][]}
 * @description 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个下标。
 * @testCase [2,3,1,1,4] => true
 * @testCase [3,2,1,0,4] => false
 * @testCase [0] => true
 * @testCase [1,0,1,0] => false
 * @testCase [1,1,1,0] => true
 */

const canJump = function (nums = []) {
     /**
     * 该题与跳跃游戏II相似，跳跃游戏II是记录步数，而该题则是
     * 判断能否到达，因此该题同样可以使用贪心算法。
     * 我们遍历数组元素，然后获得当前元素能跳转到的最大索引值
     * (当前元素能抵达的索引nums[i]+i与之前记录的能抵达的最大
     * 索引值maxJumpIndex的最大值)并赋值给maxJumpIndex，当maxJumpIndex
     * 大于等于了数组最大索引，证明能抵达终点；否则，如果maxJumpIndex
     * 小于了当前元素索引，证明已无法抵达当前索引值，也就是说无法
     * 抵达终点。
     */

    // 记录最大能抵达的索引
    // 之前的使用贪心算法出现了问题,并没有撤离分解
    let maxJumpIndex=0;
    // 遍历数组元素
    for(let i=0;i<nums.length;i++){
        // 如果maxJumpIndex大于等于当前元素索引，证明能抵达当前元素
        if(i<=maxJumpIndex){
            // 获得当前元素能跳转到的最大索引值，也就是当前元素能抵达
            // 的索引nums[i]+i与之前记录的能抵达的最大索引值maxJumpIndex
            // 的最大值
            maxJumpIndex=Math.max(maxJumpIndex,nums[i]+i);
            // 当maxJumpIndex大于等于了数组最大索引，证明能抵达终点，返回结果true
            if(maxJumpIndex>=nums.length-1)return true;
        }
        // 否则证明已无法抵达当前索引值，也就是说无法抵达终点，返回结果false。
        else return false;
    }
};

// console.log(canJump([2, 3, 1, 1, 4]));
// console.log(canJump([3, 2, 1, 0, 4]));
// console.log(canJump([0]));
// console.log(canJump([1, 0, 1, 0]));
// console.log(canJump([1, 1, 1, 0]));
// console.log(canJump([2, 5, 0, 0]));
console.log(canJump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0])); //true
