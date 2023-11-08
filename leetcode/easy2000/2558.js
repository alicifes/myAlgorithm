/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 * @description 给你一个整数数组 gifts ，表示各堆礼物的数量。每一秒，你需要执行以下操作：
 * 选择礼物数量最多的那一堆。
 * 如果不止一堆都符合礼物数量最多，从中选择任一堆即可。
 * 选中的那一堆留下平方根数量的礼物（向下取整），取走其他的礼物。
 * 返回在 k 秒后剩下的礼物数量
 * @testCase 输入：gifts = [25,64,9,4,100], k = 4
输出：29
解释： 
按下述方式取走礼物：
- 在第一秒，选中最后一堆，剩下 10 个礼物。
- 接着第二秒选中第二堆礼物，剩下 8 个礼物。
- 然后选中第一堆礼物，剩下 5 个礼物。
- 最后，再次选中最后一堆礼物，剩下 3 个礼物。
最后剩下的礼物数量分别是 [5,8,9,4,3] ，所以，剩下礼物的总数量是 29 。
 */
var pickGifts = function (gifts, k) {
  const endArr = gifts.sort((a, b) => b - a);
  for (let i = 0; i < k; i++) {
    endArr.splice(0, 1, parseInt(Math.sqrt(endArr[0])));
    endArr.sort((a, b) => b - a);
  }
  return endArr.reduce((pre, cur) => pre + cur);
};

console.log(pickGifts([25, 64, 9, 4, 100], 4));
