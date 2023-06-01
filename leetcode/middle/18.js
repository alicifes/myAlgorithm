/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 * @description 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。
 * 请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]]
 * （若两个四元组元素一一对应，则认为两个四元组重复）：0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * 你可以按 任意顺序 返回答案 。
 * @TestCase [1,0,-1,0,-2,2],0 => [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 * @TestCase [2,2,2,2,2],8 => [[2,2,2,2]]
 * @TestCase [0,0,0,0],0 => [[0,0,0,0]]
 * @TestCase [-2,-1,-1,1,1,2,2],0 => [[-2,-1,1,2],[-1,-1,1,1]]
 */

//类似于15的三数之和。但是问题是要判断重复，以及过滤重复，移动两边的指针
const fourSum = function (nums = [], target) {
  const end = [];
  if (nums.length < 4) return end;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    //和之前比去重
    //if (nums[i] >= 0) break;
    if (i>0 && nums[i] === nums[i - 1]) continue;
    if(nums[i] + nums[nums.length -3] + nums[nums.length-2]+ nums[nums.length- 1] < target) continue
    // 四个相对最小值都比target大，则后续的值也比target大，可以跳出循环了
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
    for (let j = i + 1; j < nums.length - 2; j++) {
      //和之前比去重
      if (nums[j] === nums[j - 1]&& j - 1>i) continue;
      if(nums[i] + nums[j] + nums[nums.length-2]+ nums[nums.length- 1] < target) continue
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        if (nums[i] + nums[j] + nums[left] + nums[right] === target) {
          while (left < right  && nums[left] === nums[left + 1]) left++;
          while (left < right  && nums[right] === nums[right - 1]) right--;
          end.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;
        }
        if (nums[i] + nums[j] + nums[left] + nums[right] < target) {
          left++;
        }
        if (nums[i] + nums[j] + nums[left] + nums[right] > target) {
          right--;
        }
      }
    }
  }
  return end;
};

//console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
console.log(fourSum([0,0,0,0],0));
console.log(fourSum([0,0,4,-2,-3,-2,-2,-3],-1)); //[[-3,-2,0,4]]
