/**
 * @getNumber:number
 * @return: number
 * @description: 输出一个斐波那契数列
 */
const getData = (getNumber) => {
  // if([1,2].includes(getNumber)){
  //     return 1
  // }
  // return getData(getNumber -1) + getData(getNumber - 2)
  const dp = [1, 1];
  for (let i = 2; i <= getNumber; i++) {
    //dp[i] = dp[i - 2] + dp[i - 1];
    const cur = dp[1]
    dp[1] = dp[1]+ dp[0]
    dp[0] = cur
  }
  return dp[1];
};
console.log(getData(6));
