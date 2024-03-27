/*
 * @Author: chenyuxiang
 * @Date: 2024-03-12 08:54:14
 * @LastEditTime: 2024-03-12 08:54:14
 * @LastEditors: chenyuxiang
 * @Description: 给你两个整数，被除数 dividend 和除数 divisor。将两数相除，要求 不使用 乘法、除法和取余运算。
 * 整数除法应该向零截断，也就是截去（truncate）其小数部分。例如，8.345 将被截断为 8 ，-2.7335 将被截断至 -2 。
 * 返回被除数 dividend 除以除数 divisor 得到的 商 。 10/3 => 3
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  // 如果被除数为0，则直接返回0
  if (dividend === 0) return 0;
  // 如果除数为0，则直接返回null
  if (divisor === 0) return null;
  // 如果除数为1，则直接返回被除数
  if (divisor === 1) return dividend;
  // 如果除数为-1，则返回-被除数，当被除数等于负数最大值(-2147483648)时，转为正时
  // 为2147483648数值溢出，此时应该返回正数最大值2147483647，当被除数等于正数最大
  // 值(2147483647)时，转为负数则不存在溢出
  if (divisor === -1) return dividend == -2147483648 ? 2147483647 : -dividend;

  // 2.处理符号，且将除数/被除数全转为负数处理

  // 是否为负数，初始化为false
  let isNegativeNumber = false;
  // 将除数/被除数全部转为负数处理(由于正数转负数不存在溢出问题，而负数转正数则存在溢出，
  // 因此才全部将其转换为负数处理)，并用变量(isNegativeNumber)记录最终结果为正or负数。
  if (dividend >= 0) dividend = -dividend;
  else isNegativeNumber = !isNegativeNumber;
  if (divisor >= 0) divisor = -divisor;
  else isNegativeNumber = !isNegativeNumber;

  // 3.找到能逼近dividend的divisor倍增的最大值
  let tempQuotient = 1,
    tempSum = divisor;
  while (tempSum + tempSum >= dividend) {
    tempSum += tempSum;
    tempQuotient += tempQuotient;
  }

  // 4.利用倍增逼近dividend
  let quotient = 0;
  // 此处divisor/dividend为负数，因此dividend>divisor则证明|dividend|<|divisor|
  // 被除数已小于除数，超出了范围，此时跳出循环
  while (divisor >= dividend) {
    // 此处tempSum/dividend为负数，因此tempSum<dividend则证明|tempSum|>|dividend|
    // 此时最大逼近数已大于除数，我们则需要倍增递减tempSum，直到找到dividend的最大逼近
    // 数
    while (tempSum < dividend) {
      tempSum = tempSum >> 1;
      tempQuotient = tempQuotient >> 1;
    }
    // 减去已找到的倍增逼近的最大数
    dividend -= tempSum;
    // 加上倍增的商
    quotient += tempQuotient;
  }

  // 加上符号返回结果
  return isNegativeNumber ? -quotient : quotient;
};

console.log(divide(10, 3));
console.log(divide(7, -3));
console.log(divide(-1, 1)); // -1
console.log(divide(-1, -1)); // -1
console.log(divide(-2147483648, -1)); // -1
