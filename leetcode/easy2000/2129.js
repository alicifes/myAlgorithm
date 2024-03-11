/*
 * @Author: chenyuxiang
 * @Date: 2024-03-11 08:43:07
 * @LastEditTime: 2024-03-11 08:43:07
 * @LastEditors: chenyuxiang
 * @Description:给你一个字符串 title ，它由单个空格连接一个或多个单词组成，每个单词都只包含英文字母。
 * 请你按以下规则将每个单词的首字母 大写 ：
 * 如果单词的长度为 1 或者 2 ，所有字母变成小写。
 * 否则，将单词首字母大写，剩余字母变成小写。
 * 请你返回 大写后 的 title 。
 */

/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  return title
    .split(" ")
    .map((i) => {
      if (i.length <= 2) {
        return i.toLowerCase();
      }
      return i.charAt(0).toUpperCase() + i.slice(1).toLowerCase();
    })
    .join(" ");
};

console.log(capitalizeTitle("Leetcode is so cool"));


