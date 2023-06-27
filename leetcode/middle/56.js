/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * @description 给出一个区间的集合，请合并所有重叠的区间。
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * @testCase [[1,3],[2,6],[8,10],[15,18]] => [[1,6],[8,10],[15,18]]
 * @testCase [[1,4],[4,5]] => [[1,5]]
 * @testCase [[1,4],[0,4]] => [[0,4]]
 * @testCase [[1,4],[2,3]] => [[1,4]]
 * @testCase [[2,3],[4,5],[6,7],[8,9],[1,10]] => [[1,10]]
 * @testCase [[2,3],[5,5],[2,2],[3,4],[3,4]] => [[2,4],[5,5]]
 */

const merge = function (intervals = []) {
  const mapList = [];
  //需要排序处理
  let sortIntervals = intervals.sort((a, b) => a[0] - b[0]);
  //获取左右指针来操作
  let left = sortIntervals[0][0];
  let right = sortIntervals[0][1];
  for (let i = 1; i < sortIntervals.length; i++) {
    if (sortIntervals[i][0] <= right) {
      //如果可连接，移动指针
      right = Math.max(sortIntervals[i][1], right);
    } else {
      mapList.push([left, right]);
      //不可链接，重写指针
      left = sortIntervals[i][0];
      right = sortIntervals[i][1];
    }
  }
  //push入最后一项
  mapList.push([left, right]);
  return mapList;
};

console.log(
  merge([
    [2, 3],
    [5, 5],
    [2, 2],
    [3, 4],
    [3, 4],
  ])
);
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
