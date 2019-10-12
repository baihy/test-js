let obj = {
    name: "huayang.bai",
    age: 18
}

obj[Symbol.iterator] = function* () { // 通过generator函数，给Object对象，添加iterator迭代器
    yield obj.name;
    yield obj.age;
}


for (let ele of obj) {
    console.info("ele:", ele);
}



