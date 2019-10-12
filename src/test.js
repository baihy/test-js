let promise = new Promise((resolve, reject) => {
    console.log("创建Promise对象");
    // 此时promise对象是初始化状态,即：pending
    setTimeout(() => { // setTimeout函数的含义是：执行停留指定的时间之后，执行回调函数
        resolve("data");// 把promise对象设置为成功状态
        //reject("abc"); // 把promise对象设置为失败状态
    }, 1000);
});

promise.then((data) => {
    console.log(data, "成功了"); // 含义就是根据promise对象的状态：成功或或失败，触发这两个函数
}, (data) => {
    console.log(data, "失败了")
});







