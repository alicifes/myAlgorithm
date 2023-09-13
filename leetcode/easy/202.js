/**
 * @param
 * @returns
 * @description 编写一个算法来判断一个数 n 是不是快乐数。「快乐数」 定义为：
 * 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
 * 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
 * 如果这个过程 结果为 1，那么这个数就是快乐数。
 * 如果 n 是 快乐数 就返回 true ；不是，则返回 false 。
 * 输入：n = 19
 * 输出：true
 * 解释：
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 */

//判断，只要有返回4就不行
const isHappy = function (n = 10) {
    n = n.toString()
    let end = 0
    for(let i = 0; i < n.length; i++){
        end += n.charAt(i)* n.charAt(i)
    }
    n = n*1
    if(end === 1) return true
    if(end === n || end === 4 ) return false
    return isHappy(end)
}

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(1));
console.log(isHappy(7));
console.log(isHappy(1111111)); //true