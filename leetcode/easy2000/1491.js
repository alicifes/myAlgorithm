/**
 * @param {number[]} salary
 * @return {number}
 * @description 给你一个整数数组 salary ，数组里每个数都是 唯一 的，其中 salary[i] 是第 i 个员工的工资。
 * 请你返回去掉最低工资和最高工资以后，剩下员工工资的平均值。
 */
var average = function (salary) {
  if (salary.length < 2) return 0;
  let max = Math.max(salary[0], salary[1]);
  let min = Math.min(salary[0], salary[1]);
  let end = 0;
  for (let i = 0; i < salary.length; i++) {
    max = Math.max(max, salary[i]);
    min = Math.min(min, salary[i]);
    end += salary[i];
  }
  return parseFloat((end - max - min) / (salary.length - 2));
};

console.log(average([4000, 3000, 1000, 2000]));
