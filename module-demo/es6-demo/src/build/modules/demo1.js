"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 暴漏模块

// 统一暴露
function foo() {
    console.info("******foo()******");
}

function foo1() {
    console.info("******foo1()******");
}

var obj = {
    name: "baihuayang"
};

// 统一暴漏
exports.foo = foo;
exports.foo1 = foo1;
exports.obj = obj;