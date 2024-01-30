/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * @desc 实现 pow(x, n) ，即计算 x 的整数 n 次幂函数（即，xn ）。
 */
var myPow = function (x, n) {
  if (n === 0) return 1; // n=0直接返回1
  if (n < 0) {
    //n<0时 x的n次方等于1除以x的-n次方分
    return 1 / myPow(x, -n);
  }
  if (n % 2) {
    //n是奇数时 x的n次方 = x*x的n-1次方
    return x * myPow(x, n - 1);
  }
  return myPow(x * x, n / 2); //n是偶数，使用分治，一分为二，等于x*x的n/2次方rn end;
};

console.log(myPow(2.1, 3));
console.log(myPow(2, -2));
