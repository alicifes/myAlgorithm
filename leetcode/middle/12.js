
/**
 * @param {number} num
 * @returns {string}
 * @description 整数转罗马数字
 * @description
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * @description 罗马数字包含以下七种字符： I， V， X， L，C，D 和 M 。
 * @TestCase 3 => "III" 4 => "IV" 9 => "IX" 58 => "LVIII" 1994 => "MCMXCIV" 3999 => "MMMCMXCIX" || 1 <= num <= 3999
 */

//本质上就是使用hash， 然后进行穷举(无难度)
const intToRoman = function (num) {
    const table = [
        ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        ['', 'M', 'MM', 'MMM']
    ]
    const ge = num%10
    const shi = parseInt(num/10)%10
    const bai = parseInt(num/100)%10
    const qian = parseInt(num/1000)%10
    const end = table[3][qian] + table[2][bai] + table[1][shi] + table[0][ge]
    return end
}

console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(58));
console.log(intToRoman(1994));
console.log(intToRoman(3999));
