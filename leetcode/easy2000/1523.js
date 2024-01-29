/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 * @description 给你两个非负整数 low 和 high 。请你返回 low 和 high 之间（包括二者）奇数的数目。
 */
var countOdds = function (low, high) {
    function pre(x) {
        return (x+1) >> 1
    }

    return pre(high) - pre(low-1)
};

console.log(countOdds(3, 7));
