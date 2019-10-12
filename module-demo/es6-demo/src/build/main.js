"use strict";

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _demo = require("./modules/demo");

var _demo2 = require("./modules/demo1");

var _demo3 = require("./modules/demo2");

var _demo4 = _interopRequireDefault(_demo3);

var _demo5 = require("./modules/demo3");

var _demo6 = _interopRequireDefault(_demo5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 引入其他文件

(0, _demo.dfoo)(); // 为了引入暴露的部分属性或方法。
// 后面加的是包名

// ES6中，引入分别暴漏和统一暴露时，必须要使用对象结构解析类型的赋值

(0, _demo.dfoo1)();
console.info(_demo.objd);
(0, _demo2.foo)();
(0, _demo2.foo1)();
console.info(_demo2.obj);

(0, _demo4.default)(); // 因为暴漏出来的就是一个函数，所以，导入的时候，demo2就是一个函数。
console.info(_jquery2.default);

(0, _jquery2.default)('body').css('background', 'red');

console.log(_demo6.default.name);
_demo6.default.myFun();