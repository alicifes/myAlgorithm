/**
 * @param {number[]} nums
 * @return {number[][]}
 * @description 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]]
 * 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。
 * 请你返回所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * @TestCase [-1,0,1,2,-1,-4] => [[-1,-1,2],[-1,0,1]]
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 解释：
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
 * 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
 * 注意，输出的顺序和三元组的顺序并不重要。
 * 输入：nums = [0,1,1]
 * 输出：[]
 * 解释：唯一可能的三元组和不为 0 。
 */

// const threeSum = function (nums = []) {
//     if(nums.length < 3) return []
//     const end = []
//     for(let i = 0 ; i < nums.length; i++){
//         for(let j = i+1; j< nums.length;j++){
//             for(let k = j+1; k <nums.length;k++){
//                 if(nums[i] + nums[j] + nums[k] === 0){
//                     end.push([nums[i],nums[j],nums[k]])
//                 }
//             }
//         }
//     }
//     return end
// }

const threeSum = function (nums = []) {
  const end = [];
  if (nums.length < 3) return end;
  nums = nums.sort((a, b) => a - b); //排序
  for (let i = 0; i < nums.length; i++) {
    //如果最左侧都小于0，没有后续循环都没必要了
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重当前的第一个数(已经操作)
    //定左 中 右变动
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        end.push([nums[i], nums[left], nums[right]]);
        //在比对之后去除重复的值,只有当前的i定了，重复都不需要了
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        //因为两位都定一位，后一位相同
        left++;
        right--;
      }
      if (nums[left] + nums[right] + nums[i] < 0) {
        left++;
      }
      if (nums[left] + nums[right] + nums[i] > 0) {
        right--;
      }
    }
  }
  return end;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0, 0]));
console.log(threeSum([1, 2, -2, -1]));
console.log(threeSum([-2, 0, 1, 1, 2]));
