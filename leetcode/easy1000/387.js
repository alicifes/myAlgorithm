/**
 * @param {string} s
 * @return {number}
 * @description 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。
 * @testCase s = "leetcode" 0
 */
const firstUniqChar = function (s) {
  s = [...s];
  const hashMap = new Map();
  s.forEach((item, index) => {
    if (hashMap.has(item)) {
      hashMap.set(item, -1);
    } else {
      hashMap.set(item, index);
    }
  });
  for (let item of hashMap) {
    console.log(item);
    if (item[1] !== -1) return item[1];
  }
  return -1;
};

console.log(firstUniqChar("leetcode"));
