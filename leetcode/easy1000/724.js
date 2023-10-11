/**
 * @param {number[]} nums
 * @return {number}
 * @description 给你一个整数数组 nums ，请计算数组的 中心下标 。
 * 数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。
 * 如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。
 * 如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。
 */
// var pivotIndex = function (nums) {
//   let count = 0;
//   while (count < nums.length) {
//     if (
//       nums.slice(0, count).reduce((pre, cur) => pre + cur, 0) ===
//       nums.slice(count + 1, nums.length).reduce((pre, cur) => pre + cur, 0)
//     ) {
//       return count;
//     }
//     count++;
//   }
//   return -1;
// };

var pivotIndex = function (nums) {
    let sum = nums.reduce((pre,cur) => pre+cur,0)
    let ans = 0
    let idx = -1
    for (let i = 0; i < nums.length; i++) {
        if (ans === (sum - nums[i]) / 2) {
            idx = i;
            break;
        }
        ans += nums[i];
    }
    return idx;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
