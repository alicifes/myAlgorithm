Promise.resolve()
  .then(() => {
    console.log(0);
    return Promise.resolve(4);
  })
  .then((res) => {
    console.log(res);
  });

Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(5);
  });


//分析
//输出 012345
//首先进入第一个promise ，返回的then是一个新的promise对象，这时进入微队列{console.log(0);return Promise.resolve(4);},此时的promise为pending状态[{console.log(0);return Promise.resolve(4);}]
//第二个promise这时候也把then入 微队列
//[Promise{console.log(0);return Promise.resolve(4);}   Promise{log(1)}]

//当一个then返回一个Promise的时候，v8里面会把新的promise的完成放到then里面，因此这里其实是.then(() => Promise.resolve()).then(()=>{}))
//这个函数会一直持续挂起的状态，要等待后面的完成才会运行这个函数，然后把整个这个代码放入微队列


//第一个promise返回resolve, 这时候第一个promise的状态为 fulfilled, 因此Promise的出列运行 log0
//这个时候由于第二个返回一个新的Promise      因此入列中Promise.then(4)  {log1 promise(Promise.resolve())}
//此时队列为[Promise{log(1)},new Promise.resolve()]
//此时第二个Promise返回resolve,因此此时队列中的函数出列打印 1  列 log2入列 这时候队列为 {return promise.resolve , Promise(log2)}
//由于第一个执行完毕 因此在队列中运行出队
// [Promise(log2),promise.resolve]
// [promise.resolve,Promise(log3)]
// [Promise(lg3),Promise(() => log4)]