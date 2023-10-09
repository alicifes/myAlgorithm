/**
 * @param {number[]} deck
 * @return {boolean}
 * @description 给定一副牌，每张牌上都写着一个整数。
 * 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
 * 每组都有 X 张牌。
 * 组内所有的牌上都写着相同的整数。
 * 仅当你可选的 X >= 2 时返回 true。
 * @testCase 输入：deck = [1,2,3,4,4,3,2,1]
 * 输出：true
 * 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
 */
var hasGroupsSizeX = function (deck) {
  if (deck.length === 1) return false;
  const hashMap = new Map();
  for (let i = 0; i < deck.length; i++) {
    hashMap.has(deck[i])
      ? hashMap.set(deck[i], hashMap.get(deck[i]) + 1)
      : hashMap.set(deck[i], 1);
  }
  const vals = [...hashMap.values()];
  //如果右边参数为0，如果取余为0，返回左边的最大公倍数
  const mods = (a, b) => (b === 0 ? a : mods(b, a % b));
  return vals.reduce((t, num) => mods(t, num), vals[0]) > 1;
};

console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]));
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]));
console.log(hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2])); //true
console.log(hasGroupsSizeX([1, 1, 1, 1, 1, 0, 0, 0])); //false
console.log(
  hasGroupsSizeX([
    1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3,
  ])
); //false
