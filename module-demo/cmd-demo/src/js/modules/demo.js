define(function (require, exports, module) {
    // 通过 require 引入依赖
    let myFunction = () => {
        console.info("********myFunction*********")
    }
    module.exports = {myFunction};
});