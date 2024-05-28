/*
 * @Author: chenyuxiang
 * @Date: 2024-04-03 10:00:05
 * @LastEditTime: 2024-04-03 10:00:05
 * @LastEditors: chenyuxiang
 * @Description:
 */

var partition = function (s) {
  let res = new Array();
  let path = new Array();
  dfs(s, 0, path, res);
  return res;
};

const isPart = (arr = "") => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr.charAt(left) !== arr.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const dfs = (s = "", index = 0, path = [], res = []) => {
  if (index === s.length) {
    res.push([...path]);
    return
  } else {
    for (let i = index + 1; i <= s.length; i++) {
      if (isPart(s.slice(index, i))) {
        path.push(s.slice(index, i));
        dfs(s, i, path, res);
        path.pop();
      }
    }
  }
};

console.log(partition("abb"));
