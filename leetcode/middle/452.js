/**
 * @param {number[][]} points
 * @return {number}
 * @description
 * 有一些球形气球贴在一堵用 XY 平面表示的墙面上。墙面上的气球记录在整数数组 points ，
 * 其中points[i] = [xstart, xend] 表示水平直径在 xstart 和 xend之间的气球。你不知道气球的确切 y 坐标。
 * 一支弓箭可以沿着 x 轴从不同点 完全垂直 地射出。在坐标 x 处射出一支箭，
 * 若有一个气球的直径的开始和结束坐标为 xstart，xend， 且满足  xstart ≤ x ≤ xend，
 * 则该气球会被 引爆 。可以射出的弓箭的数量 没有限制 。 弓箭一旦被射出之后，可以无限地前进。
 * 给你一个数组 points ，返回引爆所有气球所必须射出的 最小 弓箭数 。
 * @testCase [[10,16],[2,8],[1,6],[7,12]] => 2
 * @testCase [[1,2],[3,4],[5,6],[7,8]] => 4
 * @testCase [[1,2],[2,3],[3,4],[4,5]] => 2
 * @testCase [[1,2]] => 1
 * @testCase [[2,3],[2,3]] => 1
 */

const findMinArrowShots = function (points = []) {
  if (!points.length) return 0;
  points.sort((a, b) => {
    return a[1] - b[1];
  });
  let i = 0;
  let count = 0;
  while (i < points.length) {
    const end = points[i][1]
    i++;
    while(i < points.length && end >= points[i][0]){
        i++;
    }
    count ++
  }
  return count;
};

console.log(
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ])
);
