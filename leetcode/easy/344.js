/**
 * @param {string[]} s
 * @return {string[]}
 * @description: 反转字符串
 * @description:编写一个函数，其作用是将输入的字符串反转过来。
 * 输入字符串以字符数组 s 的形式给出。不要给另外的数组分配额外的空间，
 * 你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 * @TestExample: 输入：s = ["h","e","l","l","o"]输出：["o","l","l","e","h"]
 */

//搞笑的写法
// const reverseString = (s = []) => {
//     return s.reverse()
// }

//正经的双指针写法，时间复杂度为O(n)
const reverseString = (s = []) => {
    let j = s.length-1
    for(let i = 0; i<j; i++){
        const middle = s[j]
        s[j] = s[i]
        s[i] = middle
        j--
    }
    return s
}

//by AI
//该写法对我的写法做了优化，消除了中间变量，使用语法糖直接交换了两个数组中的参数
// const reverseString = (s = []) => {
//     let j = s.length-1
//     for(let i = 0; i<j; i++){
//         [s[i],s[j]] = [s[j],s[i]]
//         j--
//     }
//     return s
// }


console.log(reverseString(["h","e","l","l","o",'w']));