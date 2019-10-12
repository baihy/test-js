function getNews(url) {
    let promise = new Promise((resolve, reject) => {
        // 在初始化promise对象时。获取新闻对象。
        // 成功之后，触发获取新闻评论的请求
        // 发送请求获取新闻
        resolve("获取到的新闻");
    });
    return promise;
}

getNews("url").then((data) => {
    // 在这里可以获取新闻评论的请求
    console.log(data, "成功了"); // 含义就是根据promise对象的状态：成功或或失败，触发这两个函数
    return getNews("获取新闻评论的地址")
}, (data) => {
    console.log(data, "失败了")
}).then(() => {
    console.info("获取新闻评论成功的回调方法")
}, () => {
    console.info("获取新闻评论失败的回调方法")
})