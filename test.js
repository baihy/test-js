module.exports = {
    name: "huayang.bai",
    sex: "男",
    myfucton: function () {
        console.info("我是方法");
    },
    child: {name: "abc"}
}
exports = module.exports;

console.info(exports);


exports.person = {
    name: "aaaaa",
    myfuction: function () {
        console.info("exports测试");
    }
}
