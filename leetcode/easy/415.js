/**
 * @param {string} num1
 * @param {string} num2
 * @returns {string}
 * @description 返回两个字符串的相加之和
 */

const getStringSum = (num1, num2) => {
  let countNumber = Math.max(num1.length, num2.length);
  let end = "";
  let addNum = 0;
  for (let i = 0; i <= countNumber; i++) {
    if (num1.length < i) {
      num1 = "0" + num1;
    }
    if (num2.length < i) {
      num2 = "0" + num2;
    }
  }
  for (let i = countNumber - 1; i >= 0; i--) {
    let cur = parseInt(num1.charAt(i)) + parseInt(num2.charAt(i)) + addNum;
    if (cur >= 10) {
      cur -= 10;
      console.log(cur);
      addNum = 1;
    } else {
      addNum = 0;
    }
    end = cur + end.toString();
  }
  if (addNum) {
    end = "1" + end;
  }
  return end;
};
console.log(getStringSum("123456789", "987654321"));
