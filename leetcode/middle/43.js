/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * @description 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 * 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。
 * @TestCase "2","3" => "6"
 * @TestCase "123","456" => "56088"
 *  1 2 3
 * *4 5 6
 * --------
 *      18
 *    12
 *  6
 */

/**
 *  0 0 0 0 0  存储模型
 *          1
 *          1 同时进位 
 */

// 乘积在res对应的索引位置  这整个算法的运算都是基于 res这个array 每一个运算都是在这个array上进行的操作
const multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  const m = num1.length;
  const n = num2.length;
  const res = new Array(m + n).fill(0);
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      const mul = num1.charAt(i) * num2.charAt(j);
      let p1 = i + j,
        p2 = i + j + 1; //当前的位
      // 叠加到res上
      let sum = mul + res[p2];
      res[p2] = sum % 10;
      res[p1] += parseInt(sum / 10); //进位
    }
  }
  //找到第一个非零索引
  let i = 0;
  while (i < res.length && res[i] == 0) {
    i++;
  }
  return res.reduce((pre, cur, index) => {
    if (index >= i) {
      return pre + cur;
    }
    return ''
  }, "");
};

console.log(multiply("123", "456"));
