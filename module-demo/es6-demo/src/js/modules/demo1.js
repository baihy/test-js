// 暴漏模块

// 统一暴露
function foo() {
    console.info("******foo()******");
}


function foo1() {
    console.info("******foo1()******");
}

let obj = {
    name: "baihuayang"
};

// 统一暴漏
export {foo, foo1, obj};