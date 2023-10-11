/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 * @description 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。
 * 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。
 * @输入: pattern = "abba", s = "dog cat cat dog"
 * 输出: true
 */

const wordPattern = (pattern, s = []) => {
  s = s.split(" ");
  if(pattern.length !== s.length) return false
  const hashMap = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (hashMap.has(pattern.charAt(i))) {
      hashMap.set(pattern.charAt(i), [...hashMap.get(pattern.charAt(i)), i]);
    } else {
      hashMap.set(pattern.charAt(i), [i]);
    }
  }
  let end = true;
  for (let item of hashMap) {
    end = item[1].every((i) => s[item[1][0]] === s[i]);
    if (!end) return end;
  }
  if(Array.from(new Set(s)).length !== hashMap.size) return false
  return end;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("aabb", "dog cat cat dog"));
console.log(wordPattern("abba", "dog dog dog dog"));
