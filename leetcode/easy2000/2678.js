/**
 * @param {string[]} details
 * @return {number}
 * @description 给你一个下标从 0 开始的字符串 details 。details 中每个元素都是一位乘客的信息，
 * 信息用长度为 15 的字符串表示，表示方式如下：
 * 前十个字符是乘客的手机号码。
 * 接下来的一个字符是乘客的性别。
 * 接下来两个字符是乘客的年龄。
 * 最后两个字符是乘客的座位号。
 * 请你返回乘客中年龄 严格大于 60 岁 的人数。
 * 输入：details = ["7868190130M7522","5303914400F9211","9273338290F4010"]
 * 输出：2
 * 解释：下标为 0 ，1 和 2 的乘客年龄分别为 75 ，92 和 40 。所以有 2 人年龄大于 60 岁。
 */
var countSeniors = function (details = []) {
  let end = 0;
  details.forEach((item) => {
    if (item.slice(11, 13) > 60) {
      end++;
    }
  });
  return end;
};

console.log(
  countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"])
);
