/**
 * @param {string} digits
 * @return {string[]}
 * @description 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 */
var letterCombinations = function (digits = []) {
  if (digits.length == 0) return [];
  digits = [...digits];
  const end = [];
  const map = {
    0: "",
    1: "",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  //arr为当前的字符，index为当前遍历到的值
  const backTrack = (arr, index) => {
    if (index === digits.length) {
      end.push(arr);
      return;
    }
    for (let i = 0; i < map[digits[index]].length; i++) {
      backTrack(arr + map[digits[index]].charAt(i), index + 1);
    }
  };
  backTrack("", 0);
  return end;
};

console.log(letterCombinations("23")); //["ad","ae","af","bd","be","bf","cd","ce","cf"]
