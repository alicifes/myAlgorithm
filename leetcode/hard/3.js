/*
 * @Author: chenyuxiang
 * @Date: 2024-04-17 09:11:06
 * @LastEditTime: 2024-04-17 09:11:06
 * @LastEditors: chenyuxiang
 * @Description:
 */
const isMatch  = (p='',q ='') => {
    let arr = ''
    for(let i = 0; i < q.length; i ++ ){
        if(q.charAt(i) = '*'){
            arr += `${q.charAt(i - 1)}+`
        }
    }
}

