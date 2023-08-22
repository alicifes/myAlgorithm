/**
 * @param {string} s
 * @return {string}
 * @description 删除字符串中的重复字母
 * 给你一个字符串 s ，请你去除字符串中重复的字母，
 * 使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
 * @testcase "bcabc" => "abc"
 * @testcase "cbacdcbc" => "acdb"
 * @testcase "bbcaac" => "bac"
 * @testcase "cbacdcbc" => "bac" //acdb
 */

const removeDuplicateLetters = function (s) {
  var stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    //有的话直接跳过
    if (stack.indexOf(char) > -1) continue;
    // 使用indexOf(xx, i)取代 lastIndexOf(xx)减少遍历次数会更快
    //indexOf的第二个参数可以
    while (
      stack.length > 0 &&
      //逆序
      stack[stack.length - 1] > char &&
      //后续相同的为顺序
      s.indexOf(stack[stack.length - 1], i) > i
    ) {
        //如果两者构成逆序，且后方有
      stack.pop();
    }
    stack.push(char);
  }
  return stack.join("");
};

console.log(removeDuplicateLetters("bbcaac"));
console.log(removeDuplicateLetters("cbacdcbc"));
console.log(removeDuplicateLetters("bcabc"));
