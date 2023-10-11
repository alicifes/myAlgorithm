/**
 * @param {number} n
 * @return Boolean
 * @desc: 丑数 就是只包含质因数 2、3 和 5 的正整数。
 * 给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。
 * @Test: 6 => true 8 => true 14 => false 1 => true
 */

const isUgly = (n) => {
  if (n === 0) return false;
  if (n === 1) return true;
  if (n % 2 === 0) {
    return isUgly(n / 2);
  }
  if (n % 3 === 0) {
    return isUgly(n / 3);
  }
  if (n % 5 === 0) {
    return isUgly(n / 5);
  }
  return false;
};

//by AI
// const isUgly2 = (n) => {
//   if (n === 0) return false;
//   if (n === 1) return true;
//   if (n % 2 === 0) {
//     return isUgly(n / 2);
//   } else if (n % 3 === 0) {
//     return isUgly(n / 3);
//   } else if (n % 5 === 0) {
//     return isUgly(n / 5);
//   } else {
//     return false;
//   }
// };

console.log(isUgly(14));
