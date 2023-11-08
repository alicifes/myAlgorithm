/**
 * @param {string[]} words
 * @return {number}
 * @description
 * 输入：words = ["abcw","baz","foo","bar","xtfn","abcdef"]
 * 输出：16
 * 解释：这两个单词为 "abcw", "xtfn"。
 */
var maxProduct = function (words) {
  words = Array.from(new Set(words))
  const wordsLength = words.length;
  let end = 0;
  for (let i = 0; i < wordsLength; i++) {
    let k = i + 1;
    while (k < wordsLength) {
      if (
        Array.from(new Set([...words[i], ...words[k]])).length ===
        Array.from(new Set(words[i])).length +
          Array.from(new Set(words[k])).length
      ) {
        end = Math.max(end, words[k].length * words[i].length);
      }
      k++;
    }
  }
  return end;
};

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]));
console.log(
  maxProduct([
    "eae",
    "ea",
    "aaf",
    "bda",
    "fcf",
    "dc",
    "ac",
    "ce",
    "cefde",
    "dabae",
  ])
); //15
