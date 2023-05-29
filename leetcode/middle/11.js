/**
 * @param {number[]} height
 * @returns {number}
 * @description 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 返回容器可以储存的最大水量。
 * @TestCase [1,8,6,2,5,4,8,3,7] => 49   输入：height = [1,1]输出：1
 */

//复杂度
const maxArea = function (height = []) {
  let left = 0;
  let right = height.length - 1;
  let end = 0;
  while (left < right) {
    const minner = Math.min(height[right], height[left]);
    const square = minner * (right - left);
    if (end < square) {
      end = square;
    }
    if (minner === height[left]) {
      left++;
    } else {
      right--;
    }
  }
  return end;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1,1]));
