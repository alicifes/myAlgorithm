/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 * @description 句子 是一串由空格分隔的单词。每个 单词 仅由小写字母组成。
 * 如果某个单词在其中一个句子中恰好出现一次，在另一个句子中却 没有出现 ，那么这个单词就是 不常见的 。
 * 给你两个 句子 s1 和 s2 ，返回所有 不常用单词 的列表。返回列表中单词可以按 任意顺序 组织。
 * @testCase 输入：s1 = "this apple is sweet", s2 = "this apple is sour"输出：["sweet","sour"]
 */
var uncommonFromSentences = function (s1, s2) {
  let endArr = [...s1.split(" "), ...s2.split(" ")];
  const hashMap = new Map();
  endArr.forEach((item) => {
    if (hashMap.has(item)) {
      hashMap.set(item, hashMap.get(item) + 1);
    }

    if (!hashMap.has(item)) {
      hashMap.set(item, 1);
    }
  });
  let end = [];
  hashMap.forEach((item,key) => {
    if (item === 1) {
      end.push(key);
    }
  });
  return end;
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
