/**
 * @param {number} num
 * @return {string}
 * @description 给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。
 */
var convertToBase7 = function (num) {
  const downZero = num < 0 ? true : false;
  if (downZero) num = 0 - num;
  let end = [];
  while (num >= 7) {
    end.push(num % 7);
    num = parseInt(num / 7);
  }
  end.push(num);
  return (downZero ? "-" : "") + end.reverse().join("");
};

console.log(convertToBase7(100));
console.log(convertToBase7(-100));
console.log(convertToBase7(-7));
