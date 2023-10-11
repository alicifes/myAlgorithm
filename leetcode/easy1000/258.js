/**
 * @param {number} n
 * @returns {number} n
 * @description  recheck????
 */

const sum = (num = 0) => {
  num = [...num.toString()];
  console.log(num);
  while (num.length !== 1) {
    num = num.reduce((pre, cur) => (cur = parseInt(cur) + parseInt(pre)), 0);
    num = [...num.toString()];
  }
  return num.join("");
};

console.log(sum(38));
console.log(sum(0));
