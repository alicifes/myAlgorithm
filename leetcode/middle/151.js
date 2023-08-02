/**
 * @param {string} s
 * @return {string}
 * @description 给定一个字符串，逐个翻转字符串中的每个单词。
 * @testCase "the sky is blue" => "blue is sky the"
 * @testCase "  hello world!  " => "world! hello"
 * @testCase "a good   example" => "example good a"
 * @testCase "  Bob    Loves  Alice   " => "Alice Loves Bob"
 * @testCase "Alice does not even like bob" => "bob like even not does Alice"
 */

// const reverseWords = function (s = "") {
//   const endArr = [];
//   let cur = "";
//   for (let i = 0; i < s.length; i++) {
//     if (s.charAt(i) !== " ") {
//       cur += s.charAt(i);
//       if (i === s.length - 1) {
//         endArr.push(cur);
//       }
//     } else {
//       if (cur.length >= 1) {
//         endArr.push(cur);
//         cur = "";
//       }
//     }
//   }
//   return endArr.reverse().reduce((pre, cur, index, arr) => {
//     return (cur = pre + cur + (index == arr.length - 1 ? " " : ""));
//   }, "");
// };

const reverseWords = (s='') => {
    return s.trim().replace(/\s+/g,' ').split(' ').reverse().join(' ')
}


//console.log(reverseWords("the sky is blue"));
//console.log(reverseWords("  Bob    Loves  Alice   "));
console.log(reverseWords("a good   example"));
