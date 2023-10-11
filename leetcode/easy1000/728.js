/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 * @description
 * 自除数 是指可以被它包含的每一位数整除的数。
 * 例如，128 是一个 自除数 ，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。
 * 自除数 不允许包含 0 。
 * 给定两个整数 left 和 right ，返回一个列表，列表的元素是范围 [left, right] 内所有的 自除数 。
 */
var selfDividingNumbers = function (left, right) {
  let idx = left;
  const end = [];
  while (idx <= right) {
    let idxArr = [...idx.toString()];
    if (idxArr.every((i) => idx % i === 0)) {
      end.push(idx);
    }
    idx++;
  }
  return end;
};

console.log(selfDividingNumbers(1, 22));
