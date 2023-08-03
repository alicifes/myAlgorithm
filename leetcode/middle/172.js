/**
 * @param {number} n
 * @return {number}
 * @description 给定一个整数 n，返回 n! 结果尾数中零的数量。n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1
 * @testcase 3 => 0
 * @testcase 5 => 1
 * @testcase 10 => 2
 * @testcase 30 => 7
 * @testcase 100 => 24
 */

// const trailingZeroes = function (n) {
//   let end = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 5 === 0) {
//         end += hasFive(i,0)
//     }
//   }
//   return end;
// };

// const hasFive = (num,count) => {
//     if(num% 5 === 0){
//         count += 1
//         return hasFive(num/5, count)
//     }
//     return count
// }

//简化版
const trailingZeroes = function (n) {
    let res=0;
    while(n>=5){
        let k=Math.floor(n/5);
        res+=k;
        n=k;
    }
    return res;
};

console.log(trailingZeroes(100));
