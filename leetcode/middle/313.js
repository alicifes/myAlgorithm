/**
 * @param {number} n
 * @return {number}
 * @description 超级丑数 是一个正整数，并满足其所有质因数都出现在质数数组 primes 中。
 * 给你一个整数 n 和一个整数数组 primes ，返回第 n 个 超级丑数 .
 * 题目数据保证第 n 个 超级丑数 在 32-bit 带符号整数范围内。
 * 输入：n = 12, primes = [2,7,13,19]
 * 输出：32
 * 解释：给定长度为 4 的质数数组 primes = [2,7,13,19]，前 12 个超级丑数序列为：[1,2,4,7,8,13,14,16,19,26,28,32] 。
 * @testCase n = 1, primes = [2,3,5] => 1
 * @testCase n = 12, primes = [2,7,13,19] => 32
 * @testCase n = 100000, primes = [2,3,5,7,11,13,17,23,29,31,41,43,47,53,59,61,71,73,79,83,89,97,101,103,107,109,127,131,137,139,149,151,157,163,167,173,179,191,193,197,199] => 1092889481
 */

const nthSuperUglyNumber = function (n = 0, primes = []) {
  const dp = new Array(n).fill(1);
  //索引
  let indexSort = new Array(primes.length).fill(0);
  for (let i = 1; i < n; i++) {
    let newArr = [];
    for (let j = 0; j < primes.length; j++) {
      let cur = indexSort[j];
      newArr[j] = dp[cur] * primes[j];
    }
    let curMin = newArr.sort((a, b) => a - b)[0];
    dp[i] = curMin
    //console.log('curMin'+curMin);
    indexSort.forEach((item,index) => {
        if(curMin === dp[item] * primes[index]){
            indexSort[index] += 1
        }
    })
    // console.log(indexSort);
    // console.log(newArr);
    //console.log(dp);
  }
  return dp[n - 1];
};

console.log(nthSuperUglyNumber(12, [2, 7, 13, 19])); //32
console.log(nthSuperUglyNumber(1, [2, 3, 5])); //32
//console.log(nthSuperUglyNumber(100000, [2,3,5,7,11,13,17,23,29,31,41,43,47,53,59,61,71,73,79,83,89,97,101,103,107,109,127,131,137,139,149,151,157,163,167,173,179,191,193,197,199])); //32
