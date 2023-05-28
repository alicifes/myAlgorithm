/**
 * @param {string} s
 * @return {string}
 * @description 给你一个字符串 s，找到 s 中最长的回文子串。如果字符串的反序与原始字符串相同，则该字符串称为回文字符串
 * @TestCase "babad" => "bab" | "aba"
 * @TestCase "cbbd" => "bb"
 * @TestCase "a" => "a"
 * @TestCase "ac" => "a"
 * @TestCase "bb" => "bb"
 * @TestCase "ccc" => "ccc"
 */

//复杂度太高
// const longestPalindrome = function (s) {
//   let endArr = [];
//   //if(s.length === 1) return s
//   s = [...s];
//   let maxend = [s[0]];
//   for (let j = 0; j < s.length; j++) {
//     endArr.push(s[j]);
//     for (let i = j + 1; i < s.length; i++) {
//       endArr.push(s[i]);
//       if (isRever(endArr) && maxend.length < endArr.length) {
//         maxend = JSON.parse(JSON.stringify(endArr));
//       }
//     }
//     endArr = [];
//   }
//   let endName = ''
//   maxend.forEach(item=> {
//     endName += item
//   });
//   return endName;
// };

// const isRever = (s = []) => {
//   let end = true;
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     if (s[left] !== s[right]) {
//       end = false;
//       break;
//     }
//     left++;
//     right--;
//   }
//   return end;
// };

//中心扩散法
const longestPalindrome = function (s) {
  if (s.length < 2) return s;
  //let res = "";
  let l = 0
  let r = 0
  for (let i = 0; i < s.length; i++) {
    getEnd(i, i);
    getEnd(i, i + 1);
  }
  function getEnd(left, right) {
    //出的长度为 left-1  &&  right +1  => 求的是right - left +1 取得是 所以应该取m+1到n-1的区间
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    if(r-l-1 < right - left -1){
        l= left
        r = right
    }
    // if (res.length < right - left - 1) {
    //   res = s.slice(left + 1, right);
    // }
  }
  return s.slice(l+1,r);
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cddb"));
console.log(longestPalindrome("ccc"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("ac"));
console.log(longestPalindrome("ccaa"));
