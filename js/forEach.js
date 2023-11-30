//写一个自己实现的forEach,实现打印出arr内的所有元素
const arr = ["a", "b", "c"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//a b c

//这里第一个参数是item，第二个是index，这样就实现了myForEach
Array.prototype.myForEach = function(fn){
  for (let i = 0; i < this.length; i++) {
    fn(this[i],i)
  }
};

//传入的是一个函数,这里的原数组以this的来传递
arr.myForEach((item) => console.log(item));
//arr.map((item) => console.log(item));
