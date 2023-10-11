/**
 * @param {string} s
 * @return {number[][]}
 * @description 在一个由小写字母构成的字符串 s 中，包含由一些连续的相同字符所构成的分组。
 * 例如，在字符串 s = "abbxxxxzyy" 中，就含有 "a", "bb", "xxxx", "z" 和 "yy" 这样的一些分组。
 * 分组可以用区间 [start, end] 表示，其中 start 和 end 分别表示该分组的起始和终止位置的下标。上例中的 "xxxx" 分组用区间表示为 [3,6] 。
 * 我们称所有包含大于或等于三个连续字符的分组为 较大分组 。
 * 找到每一个 较大分组 的区间，按起始位置下标递增顺序排序后，返回结果。
 * @testCase 输入：s = "abcdddeeeeaabbbcd" 输出：[[3,5],[6,9],[12,14]] 解释：较大分组为 "ddd", "eeee" 和 "bbb"
 */
var largeGroupPositions = function (s) {
  s = [...s];
  const end = [];
  let cur = [];
  s.forEach((i, index) => {
    if (cur.length === 0 || cur.includes(i)) {
      cur.push(i);
    }
    if (!cur.includes(i) && cur.length >= 3) {
      end.push([index - cur.length, index - 1]);
      cur = [i];
    }
    if (!cur.includes(i) && cur.length !== 0) {
      cur = [i];
    }
  });
  if (cur.length >= 3) {
    end.push([s.length- cur.length, s.length- 1]);
  }
  return end;
};

console.log(largeGroupPositions("abcdddeeeeaabbbcd"));
console.log(largeGroupPositions("aaa"));
