/**
 * @param {string[]} operations
 * @return {number}
 * @description 你现在是一场采用特殊赛制棒球比赛的记录员。这场比赛由若干回合组成，过去几回合的得分可能会影响以后几回合的得分。
 * 整数 x - 表示本回合新获得分数 x
 * "+" - 表示本回合新获得的得分是前两次得分的总和。题目数据保证记录此操作时前面总是存在两个有效的分数。
 * "D" - 表示本回合新获得的得分是前一次得分的两倍。题目数据保证记录此操作时前面总是存在一个有效的分数。
 * "C" - 表示前一次得分无效，将其从记录中移除。题目数据保证记录此操作时前面总是存在一个有效的分数。
 * 请你返回记录中所有得分的总和。
 */
var calPoints = function (operations = []) {
  let end = [];
  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "+":
        end.push(end[end.length - 1] + end[end.length - 2]);
        break;
      case "D":
        end.push(end[end.length - 1] * 2);
        break;
      case "C":
        end.pop();
        break;
      default:
        end.push(parseInt(operations[i]));
    }
  }
  return end.reduce((pre, cur) => pre + cur, 0);
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
