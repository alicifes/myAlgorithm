/**
 * @param {number[]} citations
 * @return {number}
 * @description 给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数。
 * 计算并返回该研究者的 h 指数。
 * 根据维基百科上 h 指数的定义：h 代表“高引用次数” ，一名科研人员的 h 指数 是指他（她）至少发表了 h 篇论文，
 * 并且 至少 有 h 篇论文被引用次数大于等于 h 。如果 h 有多种可能的值，h 指数 是其中最大的那个。
 */
var hIndex = function (citations = []) {
  const maxH = citations.length;
  let end = 0;
  for (let i = maxH; i >= 0; i--) {
    let maxItemLength = citations.filter((item) => item >= i).length;
    end = Math.max(end, Math.min(maxItemLength, i));
  }
  return end;
};

console.log(hIndex([3, 0, 6, 1, 5]));
console.log(hIndex([1, 3, 1]));
console.log(hIndex([1, 1]));
