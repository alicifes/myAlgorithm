// (function(){
//     var b = 0
//     if(1){
//         b = 3
//         function b(){}
//         b=4
//         console.log(b);
//     }
//     console.log(b);
// })()

const hashMap = new Map()

hashMap.set('yi',1)
hashMap.set('er',2)
hashMap.set('san',3)
hashMap.set('si',4)
hashMap.set('so',5)

const hashMapKeys = hashMap.keys()

console.log(hashMapKeys.next().value);
console.log(hashMapKeys.next().value);