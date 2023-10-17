/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * @description:给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
'.' 匹配任意单个字符
'*' 匹配零个或多个前面的那一个元素
所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
@testCase s = "aa", p = "a" false
输入：s = "aa", p = "a*" 输出：true
 */
var isMatch = function (s, p) {
  //dp[i][j]表示s的前i个字符能否和p的前j个字符匹配
  const isMatch = (s, p) => {
    if (s == null || p == null) return false; //极端情况 s和p都是空 返回false

    const sLen = s.length,
      pLen = p.length;

    const dp = new Array(sLen + 1); //因为位置是从0开始的，第0个位置是空字符串 所以初始化长度是sLen + 1
    for (let i = 0; i < dp.length; i++) {
      //初始化dp数组
      dp[i] = new Array(pLen + 1).fill(false); // 将项默认为false
    }
    // base case s和p第0个位置是匹配的
    dp[0][0] = true;
    for (let j = 1; j < pLen + 1; j++) {
      //初始化dp的第一列，此时s的位置是0
      //情况1:如果p的第j-1个位置是*，则j的状态等于j-2的状态
      //例如：s='' p='a*' 相当于p向前看2个位置如果匹配，则*相当于重复0个字符
      if (p[j - 1] == "*") dp[0][j] = dp[0][j - 2];
    }
    // 迭代
    for (let i = 1; i < sLen + 1; i++) {
      for (let j = 1; j < pLen + 1; j++) {
        //情况2:如果s和p当前字符是相等的 或者p当前位置是. 则当前的dp[i][j] 可由dp[i - 1][j - 1]转移过来
        //当前位置相匹配，则s和p都向前看一位 如果前面所有字符相匹配 则当前位置前面的所有字符也匹配
        //例如：s='XXXa' p='XXX.' 或者 s='XXXa' p='XXXa'
        if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {
          dp[i][j] = dp[i - 1][j - 1];
        } else if (p[j - 1] == "*") {
          //情况3:进入当前字符不匹配的分支 如果当前p是* 则有可能会匹配
          //s当前位置和p前一个位置相同 或者p前一个位置等于. 则有三种可能
          //其中一种情况能匹配 则当前位置的状态也能匹配
          //dp[i][j - 2]：p向前看2个位置，相当于*重复了0次，
          //dp[i][j - 1]：p向前看1个位置，相当于*重复了1次
          //dp[i - 1][j]：s向前看一个位置，相当于*重复了n次
          //例如 s='XXXa' p='XXXa*'
          if (s[i - 1] == p[j - 2] || p[j - 2] == ".") {
            dp[i][j] = dp[i][j - 2] || dp[i][j - 1] || dp[i - 1][j];
          } else {
            //情况4:s当前位置和p前2个位置不匹配，则相当于*重复了0次
            //例如 s='XXXb' p='XXXa*' 当前位置的状态和p向前看2个位置的状态相同
            dp[i][j] = dp[i][j - 2];
          }
        }
      }
    }
    return dp[sLen][pLen]; // 长为sLen的s串 是否匹配 长为pLen的p串
  };
};
