(function () {
    requirejs.config({
        baseUrl: "js",
        /**
         * paths属性指定的是：下面requirejs引入模块所指定的模块名称和模块js的对应关系。
         *  注意：如果requirejs.config配置中，
         *      没有指定baseUrl的话，是相对于主js文件的路径查找的。
         *      如果有指定，则按照baseUrl指定的路径查找
         */
        // 在paths属性中，如果配置了模块。那么在这个项目的所有地方都能使用，它配置的是全局的。
        paths: {    // 告诉requirejs的所有模块。
            demo: './modules/demo',    // 格式是：模块名称："模块名称对应的js路径" 特别注意：这里的路径不能加后缀名js
            // 注意：这个路径不能加js文件的后缀名.
            demo1: "./modules/demo1",
            jquery: "./libs/jquery-1.10.1", // 引入第三方依赖库 注意：根据jQuery的源码，知道引入jQuery的名称，必须是：jquery
            angularName: "./libs/angular"  // 引入第三方依赖库
        },
        shim: { // 暴漏指定模块的中的指定对象，
            angularName: { // angularName是模块的名字，而angular是模块中的一个对象的名字
                exports: "angular" // 暴漏的是angular库中的angular对象
            }
        }
    });
    // 注意：现在的依赖关系是app，引入了demo1，而demo1，依赖demo
    requirejs(['demo1', "jquery", "angularName"], function (demo1, $, angular) {
        let name = demo1.getMsg();
        console.info(name);
        $("body").css("background", "red");  // 调用第三方js库
        console.info(angular);
    });
})(); // 注意：主模块一定要放到闭包中，即匿名的自执行函数中。