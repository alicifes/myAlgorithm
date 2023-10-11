/**
 * @param {string} s
 * @returns {number} n
 * @description:统计字符串单词的个数
 */

const getTotalWordsNumber = (s) => {
    return s.split(' ').filter(i => i).length
}

console.log(getTotalWordsNumber('hello world'));
console.log(getTotalWordsNumber(''));
