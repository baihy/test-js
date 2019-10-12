function myIterator(arr) { // 模拟iterator迭代器
    let iteratorIndex = 0;
    return {
        next: function () {
            return {value: arr[iteratorIndex++], done: arr.length >= iteratorIndex ? true : false};
        }
    }
}

var arr = ["aaa", "bbb", "ccc"];

let iterator = myIterator(arr);

console.info(iterator.next());
console.info(iterator.next());
console.info(iterator.next());
console.info(iterator.next());
console.info(iterator.next());
console.info(iterator.next());


/*******************************************************/
/**
 * 将iterator接口部署到指定的数据类型上，可以使用for-of循环遍历去循环。
 * 而ES6部署了iterator接口的数据类型有：Array，arguments，set，map，String
 */

let arr1 = ["aaa", "bbb", "ccc"];
for (let ele of arr1) {
    console.info(ele);
}

let str = "abcd";
for (let ele of str) {
    console.info(ele);
}

let obj = {
    name: "huayang.bai",
    age: 18
}
// 注意：Object对象不能使用for-of循环。
/*for (let ele of obj) {
    console.info(ele);
}*/

