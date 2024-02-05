/**
 * @param {string[]} tokens
 * @return {number}
 * @description 给你一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。
请你计算该表达式。返回一个表示表达式值的整数。
注意：
有效的算符为 '+'、'-'、'*' 和 '/' 。
每个操作数（运算对象）都可以是一个整数或者另一个表达式。
两个整数之间的除法总是 向零截断 。
表达式中不含除零运算。
输入是一个根据逆波兰表示法表示的算术表达式。
答案及所有中间计算结果可以用 32 位 整数表示。
 */
// 跟运算有关时一定要考虑除法和减法的除数和被减数，顺序不一样结果就不一样了
function compute(n1, n2, op) {
  let res;
  switch (op) {
    case "+":
      // 加法必须转换成数字计算，否则会直接当成字符
      res = parseInt(n1) + parseInt(n2);
      break;
    case "-":
      // 太神奇了，减乘除法可以直接用字符计算，不需要转换成数字
      // 应该是做运算时直接内部转换成数字了
      res = n2 - n1;
      break;
    case "*":
      res = n1 * n2;
      break;
    case "/":
      // parseInt是只保留整数部分
      // 不能使用Math.floor，因为负数时会出错
      res = parseInt(n2 / n1);
      break;
  }
  return res;
}

var evalRPN = function (tokens) {
  const len = tokens.length;
  // 辅助栈
  let temp = [];
  const op = ["+", "-", "*", "/"];

  for (let i = 0; i < len; i++) {
    if (op.includes(tokens[i]) && temp.length >= 2) {
      let num1 = temp.pop();
      let num2 = temp.pop();
      //少了放回这一步
      temp.push(compute(num1, num2, tokens[i]));
    } else {
      temp.push(tokens[i]);
    }
  }

  return temp[0];
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["3", "11", "+", "5", "-"])); //9
console.log(evalRPN(["4", "3", "-"])); //1
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
