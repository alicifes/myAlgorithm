/**
 * @param {string} s
 * @return {boolean}
 * @description 给你一个字符串 s 表示一个学生的出勤记录，其中的每个字符用来标记当天的出勤情况（缺勤、迟到、到场）。记录中只含下面三种字符：
'A'：Absent，缺勤
'L'：Late，迟到
'P'：Present，到场
如果学生能够 同时 满足下面两个条件，则可以获得出勤奖励：
按 总出勤 计，学生缺勤（'A'）严格 少于两天。
学生 不会 存在 连续 3 天或 连续 3 天以上的迟到（'L'）记录。
如果学生可以获得出勤奖励，返回 true ；否则，返回 false 。
输入：s = "PPALLP"
输出：true
解释：学生缺勤次数少于 2 次，且不存在 3 天或以上的连续迟到记录。
 */
var checkRecord = function(s) {
    console.log(s.replace(/A/g,''));
    if(s.length - s.replace('LLL','').length >= 3 || s.length - s.replace(/['A']/g,'').length >=2) return false
    return true
}

console.log(checkRecord('PPALLP'));
console.log(checkRecord('PPALLL'));
console.log(checkRecord('AAAA')); //false
console.log(checkRecord('AA')); //false