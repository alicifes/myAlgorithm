/**
 * @param {string} s
 * @return {number}
 * @description:给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * @Test 输入: s = "abcabcbb" 输出: 3 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * @Test 输入: s = "bbbbb" 输出: 1 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * @Test 输入: s = "pwwkew" 输出: 3 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */

//复杂度O(n^2)
// const lengthOfLongestSubstring = (s) => {
//   s = [...s];
//   let endStack = [];
//   let endlength = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (endStack.includes(s[i])) {
//       if (endlength < endStack.length) {
//         endlength = endStack.length;
//       }
//       const curIndex = endStack.indexOf(s[i])
//       endStack = endStack.slice(curIndex + 1,endStack.length)
//       endStack.push(s[i])
//     } else {
//       endStack.push(s[i]);
//       endStack.length > endlength ? (endlength = endStack.length) : "";
//     }
//     //console.log(endStack);
//   }
//   return endlength;
// };

//复杂度O(n)
var lengthOfLongestSubstring = function(str) {
    if (str.length <= 1) {return str.length}
      let left = 0
      let right = 1
      let max = 0
      let temp
      while(right<str.length){
        temp = str.slice(left, right)
        if (temp.indexOf(str.charAt(right)) > -1) {
          left++
          continue
        } else {
          right++
        }
        if (right - left > max) { max = right - left }
      }
      return max
};

console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew")); //3
console.log(lengthOfLongestSubstring("dvdf")); //3
console.log(lengthOfLongestSubstring("aabaab!bb")); //3
