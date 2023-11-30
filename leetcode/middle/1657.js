/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 * @description 如果可以使用以下操作从一个字符串得到另一个字符串，则认为两个字符串 接近 ：
 * 操作 1：交换任意两个 现有 字符。
 * 例如，abcde -> aecdb
 * 操作 2：将一个 现有 字符的每次出现转换为另一个 现有 字符，并对另一个字符执行相同的操作。
 * 例如，aacabb -> bbcbaa（所有 a 转化为 b ，而所有的 b 转换为 a ）
 * 你可以根据需要对任意一个字符串多次使用这两种操作。
 * 给你两个字符串，word1 和 word2 。如果 word1 和 word2 接近 ，就返回 true ；
 * 否则，返回 false 。
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;
  const hashMap1 = new Map();
  const hashMap2 = new Map();
  for (let i = 0; i < word1.length; i++) {
    if (hashMap1.has(word1.charAt(i))) {
      hashMap1.set(word1.charAt(i), hashMap1.get(word1.charAt(i)) + 1);
    } else {
      hashMap1.set(word1.charAt(i), 1);
    }
  }
  for (let i = 0; i < word2.length; i++) {
    if (hashMap2.has(word2.charAt(i))) {
      hashMap2.set(word2.charAt(i), hashMap2.get(word2.charAt(i)) + 1);
    } else {
      hashMap2.set(word2.charAt(i), 1);
    }
  }
  let map3 = [...hashMap1.keys()].sort().join("");
  let map4 = [...hashMap2.keys()].sort().join("")
  if(map3 !== map4) return false
  let map1 = [...hashMap1.values()].sort().join("");
  let map2 = [...hashMap2.values()].sort().join("");
  return map1 === map2;
};

console.log(closeStrings("abc", "bca"));
console.log(closeStrings("cabbba", "aabbss"));
console.log(closeStrings("abbzzca", "babzzcz"));
