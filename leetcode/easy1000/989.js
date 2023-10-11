/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 * @description 整数的 数组形式  num 是按照从左到右的顺序表示其数字的数组。
 * 例如，对于 num = 1321 ，数组形式是 [1,3,2,1] 。
 * 给定 num ，整数的 数组形式 ，和整数 k ，返回 整数 num + k 的 数组形式 。
 */
var addToArrayForm = function (num, k) {
  num = num.reverse();
  k = [...k.toString()].reverse().map(i => parseInt(i));
  const maxLength = Math.max(num.length, k.length);
  let end = [];
  let add = 0;
  for (let i = 0; i < maxLength; i++) {
    if (num.length < maxLength) num.push(0);
    if (k.length < maxLength) k.push(0);
    if (num[i] + k[i] + add >= 10) {
      end.push(num[i] + k[i] + add - 10);
      add = 1;
    } else {
      end.push(num[i] + k[i] + add);
      add = 0;
    }
  }
  if (add) {
    end.push(1);
  }
  return end.reverse()
};

console.log(addToArrayForm([1, 2, 0, 0], 34));
console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516));
