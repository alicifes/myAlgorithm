/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs = []) {
  const hashMap = new Map();
  for (let i = 0; i < strs.length; i++) {
    let cur = [...strs[i]].sort().join('');
    if(hashMap.has(cur)){
        hashMap.set(cur,[...hashMap.get(cur),strs[i]])
    } else {
        hashMap.set(cur,[strs[i]])
    }
  }
  let end = []
  hashMap.forEach(i => end.push(i))
  return end
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));