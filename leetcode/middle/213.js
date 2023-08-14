/**
 * @param {number} n
 * @return {number}
 * @description 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。
 * 这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。
 * 同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，
 * 系统会自动报警 。给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。
 * @testCase [2,3,2] => 3 [1,2,3,1] => 4 [0] => 0 [1] => 1 [1,2] => 2
 * @testCase [1,2,3,1] => 4 [2,3,2] => 3 [1,2,3,1,2,3,1,2,3,1,2,3,1,2,3] => 15
 */

//思路：使用两个Array来维护当前运行的状态，一个是包含第一项，一个是包含最后一项,这样就防止了两项内容的撞车
//dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + num1[i]);
//最后再返回两项之间的最大值
const rob = function (nums = []) {
  const num1 = nums.slice(0, nums.length - 1);
  const num2 = nums.slice(1, nums.length);
  const n = num1.length;
  const dp1 = new Array(n).fill(0);
  const dp2 = new Array(n).fill(0);
  if (n < 3) return Math.max(...nums);
  dp1[0] = num1[0];
  dp2[0] = num2[0];
  dp1[1] = Math.max(num1[0], num1[1]);
  dp2[1] = Math.max(num2[0], num2[1]);
  //第一项已经被使用
  for (let i = 2; i < n; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + num1[i]);
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + num2[i]);
  }
  return Math.max(dp1[n - 1], dp2[n - 1]);
};

console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3]));
console.log(rob([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]));
