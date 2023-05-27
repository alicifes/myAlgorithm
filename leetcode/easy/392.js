/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @description: 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
 * 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
 * 进阶：
 * 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？
 * @Test: 输入：s = "abc", t = "ahbgdc",输出：true || 输入：s = "axc", t = "ahbgdc"输出：false || "twn" "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxtxxxxxxxxxxxxxxxxxxxxwxxxxxxxxxxxxxxxxxxxxxxxxxn"
 */

//使用正则了来进行构造匹配  * 1~n  ？0~1  两个并起来取交集
// const isSubsequence = function (s, t) {
//   if(s.length === 0) return true
//   if (s.length > t.length) return false;
//   const sArr = [...s];
//   let newExg = `^[a-z]*?`;
//   for (let item of sArr) {
//     newExg = newExg + `${item}[a-z]*?`;
//   }
//   newExg = newExg + `$`;
//   newExg = new RegExp(newExg);
//   console.log(newExg)
//   return !t.replace(newExg, "");
// };

//正确的双直线写法 by AI
//通过对两个指针的方向来进行判断
const isSubsequence = function (s, t) {
    if(s.length === 0) return true
    if (s.length > t.length) return false;
    let i = 0;
    let j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === s.length;
};


console.log(isSubsequence("twn", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxtxxxxxxxxxxxxxxxxxxxxwxxxxxxxxxxxxxxxxxxxxxxxxxn"));
