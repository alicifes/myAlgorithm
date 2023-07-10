/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * @description 在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。
 * 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。
 * 你从其中的一个加油站出发，开始时油箱为空。
 * 给定两个整数数组 gas 和 cost ，如果你可以按顺序绕环路行驶一周，
 * 则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。
 * @testCase gas = [1,2,3,4,5], cost = [3,4,5,1,2] => 3
 * @testCase gas = [2,3,4], cost = [3,4,3] => -1
 * @testCase gas = [5,1,2,3,4], cost = [4,4,1,5,1] => 4
 * @testCase gas = [1,2], cost = [2,1] => 1
 * 输入: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
 * 输出: 3
 * 解释:
 * 从 3 号加油站(索引为 3 处)出发，可获得 4 升汽油。此时油箱有 = 0 + 4 = 4 升汽油
 * 开往 4 号加油站，此时油箱有 4 - 1 + 5 = 8 升汽油
 * 开往 0 号加油站，此时油箱有 8 - 2 + 1 = 7 升汽油
 * 开往 1 号加油站，此时油箱有 7 - 3 + 2 = 6 升汽油
 * 开往 2 号加油站，此时油箱有 6 - 4 + 3 = 5 升汽油
 * 开往 3 号加油站，你需要消耗 5 升汽油，正好足够你返回到 3 号加油站。
 * 因此，3 可为起始索引
 */

//有点类似于脑筋急转弯
const canCompleteCircuit = function (gas = [], cost = []) {
  const sumGas = gas.reduce((pre, cur) => cur + pre, 0);
  const costSum = cost.reduce((pre, cur) => cur + pre, 0);
  if (sumGas < costSum) return -1;
  let current = 0;
  let ind = 0;
  for (let i = 0; i < gas.length; i++) {
    current = gas[i] - cost[i] + current;
    if (current < 0) {
      //进入断点,以该点为起点
      current = 0
      ind = i + 1;
    }
  }
  return ind;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log(canCompleteCircuit([5,1,2,3,4],[4,4,1,5,1])); //4