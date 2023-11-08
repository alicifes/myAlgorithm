/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 * @description矩形蛋糕的高度为 h 且宽度为 w，给你两个整数数组 horizontalCuts 和 verticalCuts，其中：
 * horizontalCuts[i] 是从矩形蛋糕顶部到第  i 个水平切口的距离
 * verticalCuts[j] 是从矩形蛋糕的左侧到第 j 个竖直切口的距离
 * 请你按数组 horizontalCuts 和 verticalCuts 中提供的水平和竖直位置切割后，请你找出 面积最大 的那份蛋糕，
 * 并返回其 面积 。由于答案可能是一个很大的数字，因此需要将结果 对 109 + 7 取余 后返回。
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  let maxH = -Infinity;
  let maxW = -Infinity;
  horizontalCuts.unshift(0);
  horizontalCuts.push(h);
  verticalCuts.unshift(0);
  verticalCuts.push(w);
  horizontalCuts.sort()
  verticalCuts.sort()
  for (let i = 1; i < horizontalCuts.length; i++) {
    maxH = Math.max(maxH, horizontalCuts[i] - horizontalCuts[i - 1]);
  }
  for (let i = 1; i < verticalCuts.length; i++) {
    maxW = Math.max(maxW, verticalCuts[i] - verticalCuts[i - 1]);
  }
//   console.log(horizontalCuts);
//   console.log(verticalCuts);
//   console.log(maxH);
//   console.log(maxW);
  return maxH * maxW;
};

//console.log(maxArea(5, 4, [1, 2, 4], [1, 3]));
console.log(maxArea(5, 4, [3, 1], [1])); //6
//console.log(maxArea(5, 4, [3], [3]));
