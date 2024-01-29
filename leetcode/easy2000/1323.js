/**
 * @param {number[][]} coordinates
 * @return {boolean}
 * @description 给定一个数组 coordinates ，其中 coordinates[i] = [x, y] ， [x, y] 表示横坐标为 x、纵坐标为 y 的点。请你来判断，
 * 这些点是否在该坐标系中属于同一条直线上。
 */
var checkStraightLine = function (coordinates = []) {
  if (coordinates.length <= 2) return true;
  let k = (
    (coordinates[1][1] - coordinates[0][1]) /
    (coordinates[1][0] - coordinates[0][0])
  ).toString();
  for (let i = 2; i < coordinates.length; i++) {
    if (k === "Infinity") {
      if (
        (
          (coordinates[i][1] - coordinates[i - 1][1]) /
          (coordinates[i][0] - coordinates[i - 1][0])
        )
          .toString()
          .replace("-", "") !== k
      ) {
        return false;
      }
    } else {
      if (
        (
          (coordinates[i][1] - coordinates[i - 1][1]) /
          (coordinates[i][0] - coordinates[i - 1][0])
        ).toString() !== k
      ) {
        return false;
      }
    }
  }
  return true;
};

console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ])
);

console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
  ])
);

console.log(
  checkStraightLine([
    [0, 0],
    [0, 1],
    [0, -1],
  ])
); //true
