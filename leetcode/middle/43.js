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

const multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  let sum = 0;
  for(let i = num1.length;i< num1.length; i--){
    for(let j = num2.length; j< num2.length;j--){

    }
  }
};

console.log(multiply("123","456"));
