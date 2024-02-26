/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * @description 颠倒给定的 32 位无符号整数的二进制位。
 * 输入：n = 00000010100101000001111010011100
 * 输出：964176192 (00111001011110000010100101000000)
 * 解释：输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，
 * 因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。
 */
var reverseBits = function (n) {
  //   let str = n.toString(2);
  //   let a = "";
  //   if (str.length < 32) {
  //     let num = 32 - str.length;
  //     for (let i = 0; i < num; i++) {
  //       a = a + 0;
  //     }
  //   }
  //   let str2 = a + str;
  //   let str3 = str2.split("").reverse().join("");
  //   return parseInt(str3, 2);
  let ret = 0;
  for (let i = 0; i < 32; i++) {
      ret <<= 1;
      ret += (n & 1);
      n >>= 1;
  }
  return ret >>> 0;
};

//console.log(reverseBits(00000010100101000001111010011100));
