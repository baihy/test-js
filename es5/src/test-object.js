/***
 *  ES5给Object对象扩展了一些静态的方法，常用的有两个：
 *      Object.create(prototype, [descriptors]);和Object.defaultProperties(object,descriptors )
 *          作用是以指定的对象创建新的对象
 */
var abc = {
    name: "baihuayang"
};
var newAbc = Object.create(abc);
console.info("abc", abc);
console.info("newAbc", newAbc);



