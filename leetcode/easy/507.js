/**
 * @param {number} num
 * @return {boolean}
 * @description 对于一个 正整数，如果它和除了它自身以外的所有 正因子 之和相等，我们称它为 「完美数」。
 * 给定一个 整数 n， 如果是完美数，返回 true；否则返回 false。
 * 输入：num = 28
 * 输出：true
 * 解释：28 = 1 + 2 + 4 + 7 + 14
 * 1, 2, 4, 7, 和 14 是 28 的所有正因子。
 */
var checkPerfectNumber = function (num) {
  const perfectItem = [];
  let preIndex = 1;
  while (preIndex < num) {
    if (num % preIndex == 0) {
      perfectItem.push(preIndex);
    }
    preIndex++;
  }
  return perfectItem.reduce((pre, cur) => pre + cur, 0) === num;
};

console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(1)); //false
