/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * @description: 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
 * 如果可以，返回 true ；否则返回 false 。
 * magazine 中的每个字符只能在 ransomNote 中使用一次。
 *  示例 1：输入：ransomNote = "a", magazine = "b" 输出：false
 * 示例 2：输入：ransomNote = "aa", magazine = "ab"输出：false
 * 示例 3：输入：ransomNote = "aa", magazine = "aab"输出：true
 */

const canConstruct = function (ransomNote, magazine) {
  ransomNote = [...ransomNote];
  magazine = [...magazine];
  if (magazine.length < ransomNote.length) return false;
  const hashMap = new Map();
  magazine.forEach((item) => {
    if (!hashMap.has(item)) {
      hashMap.set(item, 1);
    } else {
      hashMap.set(item, hashMap.get(item) + 1);
    }
  });
  for (let item of ransomNote) {
    if (hashMap.has(item)) {
      if (hashMap.get(item) - 1 < 0) return false;
      hashMap.set(item, hashMap.get(item) - 1);
    } else {
      return false;
    }
  }
  return true;
};

console.log(canConstruct("aa", "aab"));
console.log(canConstruct("aa", "ab"));
