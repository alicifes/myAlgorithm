/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * @description 给你一个 无重叠的 ，按照区间起始端点排序的区间列表。
 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 */
//var insert = function (intervals, newInterval) {
//   const left = newInterval[0];
//   const right = newInterval[1];
//   if (intervals.length === 0) return [newInterval];
//   let endArr = [];
//   if (intervals[0][0] > right) {
//     return [newInterval, ...intervals];
//   }
//   if (intervals[intervals.length - 1][1] < left) {
//     return [...intervals, newInterval];
//   }
//   for (let i = 0; i < intervals.length; i++) {
//     if (left > intervals[i][1] && right < intervals[i + 1][0]) {
//       endArr.push(intervals[i]);
//       endArr.push([left, right]);
//       continue;
//     }
//     if (
//       intervals[i][1] < left ||
//       intervals[i][0] > right ||
//       (intervals[i][0] < left && intervals[i][1] > right)
//     ) {
//       endArr.push(intervals[i]);
//       continue;
//     }
//     if (intervals[i][0] <= left && intervals[i][1] <= right) {
//       endArr.push([intervals[i][0], right]);
//       continue;
//     }
//     if (intervals[i][0] >= left && intervals[i][1] > right) {
//       endArr.push([left, intervals[i][1]]);
//       continue;
//     }
//     if (left < intervals[i][0] || right > intervals[i][1]) {
//       endArr.push([
//         Math.min(left, intervals[i][0]),
//         Math.max(right, intervals[i][1]),
//       ]);
//       continue;
//     }
//   }
//   let cur = 0;
//   while (cur < endArr.length - 1) {
//     if (endArr[cur][1] >= endArr[cur + 1][0]) {
//       endArr[cur] = [
//         Math.min(endArr[cur][0], endArr[cur + 1][0]),
//         Math.max(endArr[cur][1], endArr[cur + 1][1]),
//       ];
//       endArr.splice(cur + 1, 1);
//     } else {
//       cur++;
//     }
//   }
//   return endArr;
//}
function insert(intervals, newInterval) {
  const res = [];
  let i = 0;
  const len = intervals.length;

  while (i < len && intervals[i][1] < newInterval[0]) {
    // 当前遍历的是蓝左边的，不重叠的区间
    res.push(intervals[i]);
    i++;
  }
  while (i < len && intervals[i][0] <= newInterval[1]) {
    // 当前遍历是有重叠的区间
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]); //左端取较小者，更新给兰区间的左端
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]); //右端取较大者，更新给兰区间的右端
    i++;
  }
  res.push(newInterval); // 循环结束后，兰区间为合并后的区间，推入res
  while (i < len) {
    // 在蓝右边，没重叠的区间
    res.push(intervals[i]);
    i++;
  }
  return res;
}

console.log(insert([[1, 5]], [6, 8]));
console.log(insert([[1, 5]], [0, 5]));
console.log(
  insert(
    [
      [3, 5],
      [12, 15],
    ],
    [6, 6]
  )
);
// console.log(
//   insert(
//     [
//       [1, 2],
//       [3, 5],
//       [6, 7],
//       [8, 10],
//       [12, 16],
//     ],
//     [4, 8]
//   )
// );
// console.log(
//   insert(
//     [
//       [1, 3],
//       [6, 9],
//     ],
//     [2, 5]
//   )
// );
