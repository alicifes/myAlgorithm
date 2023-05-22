/**
 * @getNumber:number
 * @return: number
 * @description: 输出一个斐波那契数列
 */
const getData = (getNumber) => {
    if([1,2].includes(getNumber)){
        return getNumber
    }
    return getData(getNumber -1) + getData(getNumber - 2)
}
console.log(getData(5));
