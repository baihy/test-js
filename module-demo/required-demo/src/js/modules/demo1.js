define(['demo'], function (demo) {
    console.info(demo.getName());
    let name = "demo1.js";
    let getMsg = () => name;
    return {getMsg};
});