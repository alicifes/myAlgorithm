/**
 * @param {string} s
 * @return {string}
 * @description: 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。
 * 元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现不止一次。
 */

const reverseVowels = (s = "") => {
  const vowels = ["a", "e", "i", "o", "u"];
  s = [...s]
  let j = s.length - 1;
  let i = 0;
  while (i < j) {
    if (vowels.includes(s[i].toLowerCase()) && vowels.includes(s[j].toLowerCase())) {
      [s[i], s[j]] = [s[j],s[i]]
      i++;
      j--;
      continue;
    }
    if (!vowels.includes(s[i].toLowerCase())) {
      i++;
    }
    if (!vowels.includes(s[j].toLowerCase())) {
      j--;
    }
  }
  return s.join('')
};

console.log(reverseVowels('hello'));
console.log(reverseVowels('leetcode'));
console.log('Aa');

