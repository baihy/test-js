// 引入其他文件

import $ from "jquery"; // 后面加的是包名

// ES6中，引入分别暴漏和统一暴露时，必须要使用对象结构解析类型的赋值
import {dfoo, dfoo1, objd} from "./modules/demo";
import {foo, foo1} from "./modules/demo1"; // 为了引入暴露的部分属性或方法。
import {obj} from "./modules/demo1";
import demo2 from "./modules/demo2";
import demo3 from "./modules/demo3";


dfoo();
dfoo1();
console.info(objd);
foo();
foo1();
console.info(obj);

demo2(); // 因为暴漏出来的就是一个函数，所以，导入的时候，demo2就是一个函数。
console.info($);

$('body').css('background', 'red');


console.log(demo3.name);
demo3.myFun();


