/**
 * @param {number[]} ratings
 * @return {number}
 * @description n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。
 * 你需要按照以下要求，给这些孩子分发糖果：
 * 每个孩子至少分配到 1 个糖果。
 * 相邻两个孩子评分更高的孩子会获得更多的糖果。
 * 请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。
 */
//左右两边遍历，取最大的值
var candy = function (ratings = []) {
  if (ratings.length === 0) return 0;
  const ratLength = ratings.length;
  let endArr = new Array(ratLength);
  endArr.fill(1);
  for (let i = 0; i < ratLength; i++) {
    if (ratings[i + 1] > ratings[i]) {
      endArr[i + 1] = endArr[i] + 1;
    }
  }
  for (let j = ratLength - 1; j > 0; j--) {
    if (ratings[j - 1] > ratings[j]) {
      endArr[j - 1] = Math.max(endArr[j - 1], endArr[j] + 1);
    }
  }
  return endArr.reduce((prev, cur) => (prev += cur));
};

console.log(candy([1, 0, 2])); //5
console.log(candy([1, 2, 2])); //4
console.log(candy([1, 2, 87, 87, 87, 2, 1])); //13
