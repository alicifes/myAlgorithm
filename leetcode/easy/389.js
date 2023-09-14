/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 * @description 给定两个字符串 s 和 t ，它们只包含小写字母。
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 * 请找出在 t 中被添加的字母。 输入：s = "abcd", t = "abcde" 输出："e"
 * 解释：'e' 是那个被添加的字母。
 * 输入：s = "", t = "y"
 * 输出："y"
 */
const findTheDifference = function(s, t) {
    for(let i = 0; i < s.length; i++){
        t = t.replace(s.charAt(i),'')
    }
    return t
}

console.log(findTheDifference('abcd','abcde'));