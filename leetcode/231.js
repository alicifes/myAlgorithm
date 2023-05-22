/**
 * @description:给你一个整数 n，请你判断该整数是否是 2 的幂次方。如果是，返回 true ；否则，返回 false 。
 * 如果存在一个整数 x 使得 n == 2x ，则认为 n 是 2 的幂次方。
 *  @param {number} n
 *  @return {boolean}
 */

const isPowerOfTwo = (n) => {
  if (n === 0) return false;
  if (n % 2 === 1) {
    if (n === 1) {
      // => 判断需要前置,而且漏掉了判断 n === 0 的情况
      return true;
    }
    return false;
  }
  return isPowerOfTwo(n / 2);
};

console.log(isPowerOfTwo(9));

// power by AI 更加精简,判断条件前置
// const isPowerOfTwo2 = (n) => {
//   if (n === 1) {
//     return true;
//   }
//   if (n % 2 === 1 || n === 0) {
//     return false;
//   }
//   return isPowerOfTwo(n / 2);
// };
