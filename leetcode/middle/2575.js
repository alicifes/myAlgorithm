/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 * @description:给你一个下标从 0 开始的字符串 word ，长度为 n ，由从 0 到 9 的数字组成。另给你一个正整数 m 。
word 的 可整除数组 div  是一个长度为 n 的整数数组，并满足：
如果 word[0,...,i] 所表示的 数值 能被 m 整除，div[i] = 1
否则，div[i] = 0
返回 word 的可整除数组。
 */
var divisibilityArray = function (word, m) {
  let endArr = new Array(word.length).fill(0);
  let num = 0;
  for (let j = 0; j < word.length; j++) {
    num = (num * 10 + parseInt(word[j])) % m;
    num === 0 ? (endArr[j] = 1) : (endArr[j] = 0);
  }
  return endArr;
};

//console.log(divisibilityArray("35427", 5));
console.log(divisibilityArray("86217457695827338571", 8));
