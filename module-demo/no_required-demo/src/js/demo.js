(function (window, demo1Fun) {
    let name = "huayang.bai";
    function demoFun() {
        console.info(name, "demoFun方法");
        demo1Fun.demo1Fun();
    }
    window.demoFun = {demoFun}; // 给window对象创建一个demoFun属性
})(window, demo1Fun);