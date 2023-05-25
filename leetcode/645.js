/**
 * @param {number[]} nums
 * @return {number[]}
 * @description: 集合 s 包含从 1 到 n 的整数。
 * 不幸的是，因为数据错误，导致集合里面某一个数字复制了成了集合里面的另外一个数字的值，导致集合 丢失了一个数字
 *  并且 有一个数字重复 。给定一个数组 nums 代表了集合 S 发生错误后的结果。
 * 请你找出重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。
 * @Test 输入：nums = [1,2,2,4] 输出：[2,3] || 输入：nums = [1,1] 输出：[1,2] || 输入：nums = [2,2] 输出：[2,1]
 */

const findErrorNums = function (nums) {
    //缓存是否重复
    let curHash= new Map()
    let current = 0
    //已知全部的和,遍历后得到的就是和正常数据的差距
    let all = (1+nums.length)/2*nums.length
    nums.forEach(item =>{
        all = all - item
        if(!curHash.has(item)){
            curHash.set(item, 1)
        }else{
            current = item
        }
    })
    return [current,current+all]
}

console.log(findErrorNums([3,2,2]))