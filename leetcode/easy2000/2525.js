/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 * @description 给你四个整数 length ，width ，height 和 mass ，分别表示一个箱子的三个维度和质量，
 * 请你返回一个表示箱子 类别 的字符串。
如果满足以下条件，那么箱子是 "Bulky" 的：
箱子 至少有一个 维度大于等于 104 。
或者箱子的 体积 大于等于 109 。
如果箱子的质量大于等于 100 ，那么箱子是 "Heavy" 的。
如果箱子同时是 "Bulky" 和 "Heavy" ，那么返回类别为 "Both" 。
如果箱子既不是 "Bulky" ，也不是 "Heavy" ，那么返回类别为 "Neither" 。
如果箱子是 "Bulky" 但不是 "Heavy" ，那么返回类别为 "Bulky" 。
如果箱子是 "Heavy" 但不是 "Bulky" ，那么返回类别为 "Heavy" 。
注意，箱子的体积等于箱子的长度、宽度和高度的乘积。
 */
var categorizeBox = function(length, width, height, mass) {
    const volume = length*width*height
    const type = []
    if(Array.from(arguments).some(i => i >= Math.pow(10,4)) || volume >=Math.pow(10,9)){
        type.push("Bulky")
    }
    if(mass >= 100) type.push("Heavy")
    if(type.length === 2) return "Both"
    if(type.length === 0) return "Neither"
    return type[0]
}

console.log(categorizeBox(1000,35,70,300));
console.log(categorizeBox(200,50,80,30));