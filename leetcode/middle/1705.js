/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 * @description 有一棵特殊的苹果树，一连 n 天，每天都可以长出若干个苹果。
 * 在第 i 天，树上会长出 apples[i] 个苹果，这些苹果将会在 days[i] 天后（也就是说，第 i + days[i] 天时）腐烂，
 * 变得无法食用。也可能有那么几天，树上不会长出新的苹果，此时用 apples[i] == 0 且 days[i] == 0 表示。
 * 你打算每天 最多 吃一个苹果来保证营养均衡。注意，你可以在这 n 天之后继续吃苹果。
 * 给你两个长度为 n 的整数数组 days 和 apples ，返回你可以吃掉的苹果的最大数目。
 * @testCase 输入：apples = [1,2,3,5,2], days = [3,2,1,4,2]
 * 输出：7
 * 解释：你可以吃掉 7 个苹果：
- 第一天，你吃掉第一天长出来的苹果。
- 第二天，你吃掉一个第二天长出来的苹果。
- 第三天，你吃掉一个第二天长出来的苹果。过了这一天，第三天长出来的苹果就已经腐烂了。
- 第四天到第七天，你吃的都是第四天长出来的苹果。
 */
// var eatenApples = function (apples, days) {
//   let total = 0;
//   let disAbleArr = days.map((item, index) => item + index);
//   let maxDisAbleDay = Math.max(...disAbleArr);
//   let day = 0;
//   while (day < maxDisAbleDay) {
//     while (disAbleArr.indexOf(day) > -1) {
//       apples[disAbleArr.indexOf(day)] = undefined;
//       disAbleArr[disAbleArr.indexOf(day)] = undefined;
//     }
//     let curIndex = Infinity;
//     for (let i = 0; i <= Math.min(day, apples.length); i++) {
//       if (curIndex === Infinity && apples[i] > 0) {
//         curIndex = i;
//         continue;
//       }
//       if (apples[i] > 0) {
//         if (Math.min(disAbleArr[i], disAbleArr[curIndex]) === disAbleArr[i]) {
//           curIndex = i;
//         }
//       }
//     }
//     if (curIndex !== Infinity && curIndex <= day) {
//       apples[curIndex]--;
//       total++;
//     }
//     day++;
//   }
//   return total;
// };

/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function (apples, days) {
  let cnt = 0,
    indexQ = [],
    date = 0;
  while (indexQ.length > 0 || date < apples.length) {
    // 放入队列 => 树上结果，存着慢慢吃，按照腐烂时间最快的放在队列最前
    if (date < apples.length && apples[date] > 0) {
      let i = indexQ.length - 1;
      // 将保质期较短的苹果放到前列
      while (i >= 0 && date + days[date] < indexQ[i] + days[indexQ[i]]) {
        indexQ[i + 1] = indexQ[i];
        i--;
      }
      indexQ[i + 1] = date;
    }
    // 弹出队列 => 扔掉吃完的苹果框/腐烂苹果
    while (
      indexQ.length > 0 &&
      (apples[indexQ[0]] <= 0 || indexQ[0] + days[indexQ[0]] <= date)
    ) {
      indexQ.shift();
    }
    // 元素递减 => 吃苹果
    if (indexQ.length > 0) {
      apples[indexQ[0]]--;
      cnt++;
    }
    date++;
  }
  return cnt;
};

console.log(eatenApples([1, 2, 3, 5, 2], [3, 2, 1, 4, 2])); //7
console.log(eatenApples([3, 0, 0, 0, 0, 2], [3, 0, 0, 0, 0, 2])); //5
console.log(eatenApples([2, 1, 10], [2, 10, 1])); //4
