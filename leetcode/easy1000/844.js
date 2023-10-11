/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @description 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。
 * 注意：如果对空文本输入退格字符，文本继续为空。
 * @testCase 输入：s = "ab#c", t = "ad#c"输出：true解释：s 和 t 都会变成 "ac"。
 */
var backspaceCompare = function (s, t) {
  return getString(s) === getString(t);
};

const getString = (s) => {
  s = [...s];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      s.splice(i, 1);
      i--;
      if (i >= 0) {
        s.splice(i, 1);
        i--;
      }
    }
  }
  return s.join("");
};

//console.log(backspaceCompare("ab#c", "ad#c"));
//console.log(backspaceCompare("a#c", "b"));
console.log(backspaceCompare("ab##", "c#d#")); //true
console.log(backspaceCompare("y#fo##f", "y#f#o##f")); //true
