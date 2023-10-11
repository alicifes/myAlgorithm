/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 * @description 小镇里有 n 个人，按从 1 到 n 的顺序编号。传言称，这些人中有一个暗地里是小镇法官。
 * 如果小镇法官真的存在，那么：
 * 小镇法官不会信任任何人。
 * 每个人（除了小镇法官）都信任这位小镇法官。
 * 只有一个人同时满足属性 1 和属性 2 。
 * 给你一个数组 trust ，其中 trust[i] = [ai, bi] 表示编号为 ai 的人信任编号为 bi 的人。
 * 如果小镇法官存在并且可以确定他的身份，请返回该法官的编号；否则，返回 -1 。
 */
var findJudge = function (n, trust) {
  if (n === 1 && trust.length === 0) return 1;
  let arr = new Array(n).fill(0);
  for (let i = 0; i < trust.length; i++) {
    if (!arr[trust[i][0] - 1]) arr[trust[i][0] - 1] = [];
    arr[trust[i][0] - 1].push(trust[i][1]);
  }
  let end = -1;
  console.log(arr);
  arr.forEach((item, index) => {
    if (
      item === 0 &&
      arr
        .filter((i, ind) => index !== ind)
        .every((i) => i !== 0 && i.includes(index + 1))
    )
      end = index + 1;
  });
  return end;
};

// console.log(
//   findJudge(3, [
//     [1, 3],
//     [2, 3],
//     [3, 1],
//   ])
// );
// console.log(
//   findJudge(3, [
//     [1, 2],
//     [2, 3],
//   ])
// );

console.log(
  findJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3],
  ])
);
