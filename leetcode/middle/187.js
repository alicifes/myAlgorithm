/**
 * @param {string} s
 * @return {string[]}
 * @description 重复的DNA序列 DNA序列 由一系列核苷酸组成，缩写为 'A', 'C', 'G' 和 'T'.。
 * 例如，"ACGAATTCCG" 是一个 DNA序列 。
 * 在研究 DNA 时，识别 DNA 中的重复序列非常有用。
 * 给定一个表示 DNA序列 的字符串 s ，返回所有在 DNA 分子中出现不止一次的 长度为 10 的序列(子字符串)。你可以按 任意顺序 返回答案。
 * @testcase 输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT" 输出：["AAAAACCCCC","CCCCCAAAAA"]
 * @testCase 输入：s = "AAAAAAAAAAAAA" 输出：["AAAAAAAAAA"]
 */

const findRepeatedDnaSequences = function (s) {
//   const hashMap = [];
//   const end = [];
//   for (let i = 0; i <= s.length - 10; i++) {
//     if(hashMap.includes(s.slice(i,i+10))){
//         end.push(s.slice(i,i+10))
//     } else {
//      hashMap.push(s.slice(i, i + 10));
//     }
//   }
//   return Array.from(new Set(end));
  const result = [];
  const map = new Map();
  for (let i = 0; i <= s.length - 10; i++) {
    const curS = s.slice(i, i + 10);
    if (map.get(curS) === 1) {
      result.push(curS);
    }
    map.set(curS, map.has(curS) ? map.get(curS) + 1 : 1);
  }
  return result;
};

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA"));
console.log(findRepeatedDnaSequences("AAAAAAAAAAA"));
