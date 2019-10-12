(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let demo1 = require("./demo1");
let demo2 = require("./demo2");
let demo3 = require("./demo3");


demo1.myFuntion();
console.log(demo2.name);
demo3();
},{"./demo1":2,"./demo2":3,"./demo3":4}],2:[function(require,module,exports){
module.exports = {
    msg: "提示信息",
    myFuntion: () => {
        console.info("*************************")
    }
}
},{}],3:[function(require,module,exports){
exports.name = "huayang.bai";
},{}],4:[function(require,module,exports){
module.exports = function () {
    console.info("**********匿名函数***************");
};
},{}]},{},[1]);
