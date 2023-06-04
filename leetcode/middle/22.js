/**
 * @param {number} n
 * @return {string[]}
 * @description 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * @TestCase 3 => ["((()))","(()())","(())()","()(())","()()()"] || 1 <= n <= 8
 * @TestCase 1 => ["()"]
 * @TestCase 2 => ["(())","()()"]
 */

//复杂度思路是将字符串中插入（）来实现
const generateParenthesis = function (n) {
    let count = 0
    let end = ['()']
    if(n === 1 ) return end
    while(count < n -1){
     end = getItem(end)
     count ++
    }
    return end
}

const getItem = (itemList = [] ) => {
    const end = []
    itemList.forEach(item => {
        for(let i = 0; i< item.length;i++){
            const newItem = item.slice(0,i) + '()' + item.slice(i)
            if(!end.includes(newItem)){
                end.push(newItem)
            }
        }
    })
    return end
}

console.log(generateParenthesis(2));