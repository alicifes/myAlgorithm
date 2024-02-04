/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @description 给定两个字符串 s 和 t ，判断它们是否是同构的。
 * 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。
 * 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。
 * 不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  const curLength = s.length;
  const hashMap = new Map();
  const used = new Map();
  for (let i = 0; i < curLength; i++) {
    if (!hashMap.has(s.charAt(i))) {
      hashMap.set(s.charAt(i), t.charAt(i));
      if (!used.has(t.charAt(i))) {
        used.set(t.charAt(i));
      } else {
        return false;
      }
    } else {
      if (hashMap.get(s.charAt(i)) !== t.charAt(i)) {
        return false;
      }
    }
  }
  return true;
};

console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("aoo", "egg"));
console.log(isIsomorphic("badc", "baba")); //false
