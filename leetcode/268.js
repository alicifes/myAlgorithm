/**
 * @param {number[]} nums
 * @returns {number}
 * @description:给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
 * @Test：输入：nums = [3,0,1] 输出：2 解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。
 * @Test:输入：nums = [0,1]输出：2解释：n = 2，因为有 2 个数字，所以所有的数字都在范围 [0,2] 内。2 是丢失的数字，因为它没有出现在 nums 中。
 */

const missingNumber = (nums) => {
    for(let i = 0; i<= nums.length; i++){
        if(!nums.includes(i)){
            return i
        }
    }
}

//by AI 通过求和来解决问题，从而找到残缺的数组,第一项可以通过高斯求和来快速求解，时间复杂度为O(n)
// const missingNumber = (nums) => {
//     let sum = 0
//     for(let i = 0; i<= nums.length; i++){
//         sum += i
//     }
//     for(let i = 0; i< nums.length; i++){
//         sum -= nums[i]
//     }
//     return sum
// }

console.log(missingNumber([3,0,1]));
console.log(missingNumber([0,1]));
