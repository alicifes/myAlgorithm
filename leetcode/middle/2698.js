/**
 * @param {number} n
 * @return {number}
 * @description给你一个正整数 n ，请你返回 n 的 惩罚数 。
 * n 的 惩罚数 定义为所有满足以下条件 i 的数的平方和：1 <= i <= n
 * i * i 的十进制表示的字符串可以分割成若干连续子字符串，且这些子字符串对应的整数值之和等于 i
 * @testCase 输入：n = 10
 * 输出：182
 * 解释：总共有 3 个整数 i 满足要求：
 * - 1 ，因为 1 * 1 = 1
 * - 9 ，因为 9 * 9 = 81 ，且 81 可以分割成 8 + 1 。
- 10 ，因为 10 * 10 = 100 ，且 100 可以分割成 10 + 0 。
因此，10 的惩罚数为 1 + 81 + 100 = 182
 */
var punishmentNumber = function (n) {
  const endArr = [];
  for (let i = 1; i <= n; i++) {
    const curPow = (i * i).toString();
    if (isTrue(curPow, 0, 0, i)) {
      endArr.push(curPow);
    }
  }
  return endArr.reduce((pre, cur) => parseInt(pre) + parseInt(cur));
};

/**
 * @param {*} curNum 当前的值
 * @param {*} pos 当前指针的位置
 * @param {*} tot 总和
 * @param {*} target 目前循环的值
 */
const isTrue = (curNum, pos, tot, target) => {
  //当前循环的值和pos的值相同,如果值相同意味着移动到了同一个位置，不能再移动指针了
  if (pos === curNum.length) {
    return tot === target;
  }
  let sum = 0;
  for (let i = pos; i < curNum.length; i++) {
    //从第一位开始取值，每次*10获取当前第一个截取的值
    sum = sum * 10 + parseInt(curNum[i]);
    //如果当前的值超过了目标的和，意味着不需要再移动，该方法进入死循环 false
    //再移动只会更大
    if (tot + sum > target) {
      break;
    }
    //如果没有超过目标的值，移动一位（进入下一个dfs）,
    if (isTrue(curNum, i + 1, tot + sum, target)) {
      return true;
    }
  }
  return false;
};

console.log(punishmentNumber(10));
