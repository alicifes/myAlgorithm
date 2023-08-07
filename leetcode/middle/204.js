/**
 * @param {number} n
 * @return {number}
 * @description 给定整数 n ，返回 所有小于非负整数 n 的质数的数量 。
 * @testCases 10 => 4输入：n = 10 输出：4 解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 * @testCases 0 => 0
 * @testCases 1 => 0
 * @testCases 2 => 0
 * @testCases 3 => 1
 * @testCases 4 => 2
 * @testCases 5 => 2
 */

const countPrimes = function (n) {
  //厄拉多塞筛法
  if(n < 2) return 0
  let flag=new Array(n).fill(0).map(v=>true)
  let count = 0
  for(let i = 2; i < n ; i++){
    if(flag[i]){
        count ++
        for(let j = i + i; j < n;j+= i ){
            flag[j] = false
        }
    }
  }
  return count
};

console.log(countPrimes(499979));  //41537
