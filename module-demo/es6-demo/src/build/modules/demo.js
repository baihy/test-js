"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dfoo = dfoo;
exports.dfoo1 = dfoo1;
// 暴漏模块

// 分别暴漏
function dfoo() {
    console.info("******foo()******");
}

// 分别暴漏
function dfoo1() {
    console.info("******foo1()******");
}
// 分别暴漏
var objd = exports.objd = {
    name: "baihuayang"
};