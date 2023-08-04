/**
 * @param {number[]} nums
 * @return {number}
 * @description 打家劫舍
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，
 * 影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 * @example [1,2,3,1] => 4 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。偷窃到的最高金额 = 1 + 3 = 4 。
 * @example [2,7,9,3,1] => 12 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 */

const rob = function (nums) {
    //dp代表的是当前位置可以得到的最多的钱
    if(nums.length === 1) return nums[0]
    const dp = [];
    dp[0] = nums[0]
    dp[1] = Math.max(nums[1],nums[0])
    // for(let i = 0;i<nums.length;i++){
    //     for(let j = i+2; j <nums.length;j++){
    //         dp[j] = Math.max(nums[j]+dp[i],dp[j - 1])
    //     }
    // }
    for(let i = 2; i < nums.length; i++){
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
    }
    return dp[nums.length - 1]
}

console.log(rob([1, 2, 3, 1]));
console.log(rob([2,7,9,3,1]));
console.log(rob([2,1]));