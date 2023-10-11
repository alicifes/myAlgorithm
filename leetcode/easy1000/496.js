/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @description: nums1 中数字 x 的 下一个更大元素 是指 x 在 nums2 中对应位置 右侧 的 第一个 比 x 大的元素。
 * 给你两个 没有重复元素 的数组 nums1 和 nums2 ，下标从 0 开始计数，其中nums1 是 nums2 的子集。\
 * 对于每个 0 <= i < nums1.length ，找出满足 nums1[i] == nums2[j] 的下标 j ，并且在 nums2 确定 nums2[j] 的 下一个更大元素 。
 * 如果不存在下一个更大元素，那么本次查询的答案是 -1 。
 * 返回一个长度为 nums1.length 的数组 ans 作为答案，满足 ans[i] 是如上所述的 下一个更大元素
 *  @Test 输入：nums1 = [4,1,2], nums2 = [1,3,4,2] 输出：[-1,3,-1]
 *  @Test 输入：nums1 = [2,4], nums2 = [1,2,3,4] 输出：[3,-1]
 */

//复杂度为O(n^m)
// const nextGreaterElement = function (nums1, nums2) {
//     const endArr = []
//     nums1.forEach(item => {
//         let start = false
//         for(let i = 0;i<nums2.length;i++){
//             if(nums2[i] === item){
//                 start = true
//             }
//             if(start){
//                 if(nums2[i]>item){
//                     endArr.push(nums2[i])
//                     start = false
//                 }
//             }
//         }
//         if(start){
//             endArr.push(-1)
//             start = false
//         }
//     })
//     return endArr
// }

//复杂度为O(n) 通过栈来进行处理
//该函数的主要思路是：使用栈来保存 nums2 中的元素，
//同时使用哈希表（Map）来记录每个元素的下一个更大元素。
//遍历 nums2 中的每个元素，如果当前元素比栈顶元素大，则将栈顶元素弹出，
//并将栈顶元素作为键，当前元素作为值，存入哈希表中。最后遍历 nums1 中的每个元素，从哈希表中查找该元素的下一个更大元素，如果没有则返回 -1。

//使用栈作为中介，把下一项的值放在栈顶，如果没有就压入栈，如果有的话就出栈，并且把当前的key&value存入
const nextGreaterElement = function (nums1, nums2) {
    const endArr = []
    const stack = []
    const map = new Map()
    nums2.forEach(item => {
        while(stack.length && stack[stack.length-1]<item){
            map.set(stack.pop(),item)
        }
        stack.push(item)
    })
    nums1.forEach(item => {
        endArr.push(map.get(item) || -1)
    })
    return endArr
}

console.log(nextGreaterElement([2,4],[1,2,3,4]));