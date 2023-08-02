/**
 * @param {number[]} nums
 * @return {number}
 * @description 经典题目之一
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
 * 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
 * 你可以认为每种硬币的数量是无限的。
 * @testCase coins = [1, 2, 5], amount = 11 => 3
 * @testCase coins = [2], amount = 3 => -1
 * @testCase coins = [1], amount = 0 => 0
 * @testCase coins = [1], amount = 1 => 1
 * @testCase coins = [1], amount = 2 => 2
 */

//dp[] = dp[] + dp[]
const coinChange = function (coins = [], amount = 0) {
  coins.sort((a, b) => a - b);
  let end = -1;
  const router = [];
  const trackBack = (sum, index) => {
    sum += coins[index];
    if (sum === amount) {
      if (end === -1) {
        end = router.length;
        return
      }
      if (router.length < end) {
        end = router.length;
        return;
      }
    }
    if (sum > amount) {
      return;
    }
    if (sum < amount) {
      for (let i = 0; i < coins.length; i++) {
        router.push(coins[i]);
        trackBack(sum, i);
        sum = sum - coins[i]
        router.pop();
      }
    }
  };
  trackBack(0, 0);
  return end;
};

console.log(coinChange([1, 2, 5], 11));
