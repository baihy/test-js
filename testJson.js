var abc = {name: "baihy"};
var result = JSON.stringify(abc);

console.info(typeof result);
let abcd = `abcafsdafsd${abc.name}`;
console.log(abcd)

function Point(x = 0, y = 0) { // 执行形参的默认值
    this.x = x;
    this.y = y;
}