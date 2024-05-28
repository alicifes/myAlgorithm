/*
 * @Author: chenyuxiang
 * @Date: 2024-05-27 16:03:59
 * @LastEditTime: 2024-05-27 16:03:59
 * @LastEditors: chenyuxiang
 * @Description:
 */

var missingRolls = function (rolls = [], mean, n) {
  const totalLength = rolls.length + n;
  let total = mean * totalLength;
  let sum = 0;
  rolls.forEach((acc) => {
    sum += acc;
  });
  if (sum >= total) {
    return [];
  }
  total -= sum;
  let avg = Math.floor(total / n);
  if (avg < 1 || avg > 6) {
    return [];
  }
  let reminder = total % n;
  if (avg === 6 && reminder > 0) {
    return [];
  }
  return Array(n)
    .fill(avg)
    .map((v, i) => (i < reminder ? v + 1 : v));
};

console.log(missingRolls([3, 2, 4, 3], 4, 2));
