/**
 * @param {number} num
 * @return {number}
 * @description 给你一个整数 num ，返回 num 中能整除 num 的数位的数目。
 * 如果满足 nums % val == 0 ，则认为整数 val 可以整除 nums 。
 * @testCase 输入：num = 7 输出：1 解释：7 被自己整除，因此答案是 1 。
 */
var countDigits = function(num) {
    let strNum = num.toString()
    let end = 0
    for(let i = 0; i < strNum.length; i ++){
        if(strNum.charAt(i) === 1){
            end ++
            continue
        }
        if(num % strNum.charAt(i) === 0){
            end ++
        }
    }
    return end
}

console.log(countDigits(1248));