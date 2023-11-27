/**
 * @param {number[]} arr
 * @return {number}
 * @description 给定一个整数数组 arr，找到 min(b) 的总和，
 * 其中 b 的范围为 arr 的每个（连续）子数组。
 * 由于答案可能很大，因此 返回答案模 10^9 + 7 。
 * @testCase 输入：arr = [3,1,2,4]
 * 输出：17=
 * 解释：
 * 子数组为 [3]，[1]，[2]，[4]，[3,1]，[1,2]，[2,4]，[3,1,2]，[1,2,4]，[3,1,2,4]。
 * 最小值为 3，1，2，4，1，1，2，1，1，1，和为 17。
 */
var sumSubarrayMins = function (arr) {
  // let end = 0;
  // let count = 1;
  // while (count < arr.length) {
  //   for (let i = 0; i + count <= arr.length; i++) {
  //     end += Math.min(...arr.slice(i, i + count));
  //   }
  //   count++;
  // }
  // end += Math.min(...arr);
  // return end % 1000000007;
  const MOD = 1000000007;
  const len = arr.length;
  let res = 0;

  for (let i = 0; i < len; i++) {
    let j = i;
    let k = i;

    let stack = []

    // 计算左边界
    while ((k >= 0 && arr[k] > arr[i]) || i === k) {
      k--;
    }

    // 计算右边界
    while ((arr[j] >= arr[i] && j < len) || i === j) {
      j++;
    }

    let r = (j - i) * (i - k);
    res = (res + r * arr[i]) % MOD;
  }
  return res
};

console.log(sumSubarrayMins([3, 1, 2, 4])); //17
console.log(sumSubarrayMins([11, 81, 94, 43, 3])); //444

    