/**
 * @param {number[]} height
 * @return {number}
 * @description 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 */
var trap = function (height = []) {
  let rightMax = height[height.length - 1];
  let end = 0;
  let leftMaxArr = new Array(height.length).fill(0);
  let rightMaxArr = new Array(height.length).fill(0);
  //左max
  let leftMax = height[0];
  for (let i = 0; i < height.length; i++) {
    leftMax = Math.max(leftMax, height[i]);
    leftMaxArr[i] = leftMax;
  }
  //初始化
  rightMaxArr[height.length - 1] = height[height.length - 1];
  //右max
  for (let j = height.length - 2; j >= 0; j--) {
    rightMax = Math.max(rightMax, height[j]);
    rightMaxArr[j] = rightMax;
  }
  for (let i = 0; i < height.length; i++) {
    end += Math.min(leftMaxArr[i], rightMaxArr[i]) - height[i];
  }
  return end;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
