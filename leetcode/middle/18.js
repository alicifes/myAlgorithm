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

const fourSum = function (nums = [], target) {
  const end = [];
  if (nums.length < 4) return end;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right - 1) {
      const findItem = target - nums[i] - nums[left] - nums[right];
      console.log(findItem);
      if (findItem < nums[left]) {
        left++;
        continue;
      }
      if (findItem > nums[right]) {
        right--;
        continue;
      }
      if (nums.slice(left, right).includes(findItem)) {
        end.push([nums[i], nums[left], findItem, nums[right]]);
        //while (left < right - 1 && nums[left] === nums[left + 1]) left++;
        //while (left < right - 1 && nums[right] === nums[right - 1]) right--;
        right--;
        left++;
      }
      left ++
    }
  }
  return end;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
