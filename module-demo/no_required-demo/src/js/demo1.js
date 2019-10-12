(function (window) {
    let name = "huayang.bai";
    function demo1Fun() {
        console.info(name, "demo1Fun方法");
    }
    window.demo1Fun = {demo1Fun};
})(window);