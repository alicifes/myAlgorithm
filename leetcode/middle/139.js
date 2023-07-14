/**
 * @param {string} s
 * @return {string}
 * @description 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。
 * 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
 * @testCase s = "leetcode", wordDict = ["leet","code"] => true
 * @testCase s = "applepenapple", wordDict = ["apple","pen"] => true
 * @testCase s = "catsandog", wordDict = ["cats","dog","sand","and","cat"] => false
 * @testCase s = "aaaaaaa", wordDict = ["aaaa","aaa"] => true
 * @testCase s = "cars", wordDict = ["car","ca","rs"] => true
 */

const wordBreak = function (s = "", wordDict = []) {
  const allLength = s.length;
  const dp = new Array(allLength + 1).fill(false);
  //开始
  dp[0] = true;
  for (let i = 1; i <= allLength; i++) {
    // for (let j = i - 1; j >= 0; j--) {
    //   if (dp[j] && wordDict.includes(s.slice(j, i))) {
    //     dp[i] = true;
    //   }
    // }
    for(let j = 0; j <= i - 1; j++){
        if(dp[j] && wordDict.includes(s.slice(j,i))){
            dp[i] = true
            break
        }
    }
  }
  return dp[allLength];
};

console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("applepenapple", ["apple", "pen"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
console.log(wordBreak("cars", ["car", "ca", "rs"])); //true
