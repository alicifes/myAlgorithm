/*
 * @Author: chenyuxiang
 * @Date: 2024-03-13 14:25:04
 * @LastEditTime: 2024-03-13 14:25:04
 * @LastEditors: chenyuxiang
 * @Description:给你一个 二进制 字符串 s ，其中至少包含一个 '1' 。
 * 你必须按某种方式 重新排列 字符串中的位，使得到的二进制数字是可以由该组合生成的 最大二进制奇数 。
 * 以字符串形式，表示并返回可以由给定组合生成的最大二进制奇数。
 * 注意 返回的结果字符串 可以 含前导零。
 */
var maximumOddBinaryNumber = function (s) {
  let countOne = 0;
  let countZero = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      countOne++;
    } else {
      countZero++;
    }
  }
  let endArr = "";
  while (countOne > 1) {
    endArr += "1";
    countOne--;
  }
  while (countZero > 0) {
    endArr += "0";
    countZero--;
  }
  endArr += "1";
  return endArr;
};

console.log(maximumOddBinaryNumber("1101"));
