/**
 * @param {number[]} temperatures
 * @return {number[]}
 * @description 给定一个整数数组 temperatures ，表示每天的温度，
 * 返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。
 * 如果气温在这之后都不会升高，请在该位置用 0 来代替。
 * 输入: temperatures = [73,74,75,71,69,72,76,73]
 * 输出: [1,1,4,2,1,1,0,0]
 */
var dailyTemperatures = function(temperatures) {
    let endArr = new Array(temperatures.length)
    let stack = []
    for(let i = 0; i < temperatures.length; i ++){
        let right = i + 1
        while(stack && right < temperatures.length){
            if(temperatures[right] < temperatures[i]){
                stack.push(right)
                endArr[i] = right - i
            }
            right ++
        }
    }
    return endArr
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
