/**
 * @param {number[]} nums
 * @returns {number[]}
 * @description 找出不在区间之中的 number
 */

const findNotIndex = (nums = []) => {
    const end = []
    for(let i = 1; i <= nums.length; i++){
        if(!nums.includes(i)){
            end.push(i)
        }
    }
    return end
}

console.log(findNotIndex([1,1]));