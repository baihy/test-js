let symbol = Symbol(); // Symbol对应的是唯一值。
let symbol1 = Symbol("one");
let symbol2 = Symbol("twn");
// 可以通过描述来区分两个不同Symbol数据
// console.info(symbol);

let obj = {
    name:"huayang.bai",
    age:18
};
// Symbol类型的数据，作为对象的属性
// 不能使用点的方式执行Symbol属性，只能使用[]的方式
// obj.Symbol = "aaa";
obj[symbol] = "hello"; //
// console.info(obj);

// console.log(symbol.toString());

const PERSON_KEY = Symbol("person_key");
// console.info(PERSON_KEY);

for (var ele in obj){
    // 注意：Symbol属性是不能被for in循环遍历出来的。
    console.info(ele);
}


