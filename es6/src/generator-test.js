function* generatorDemo() {
    let result =  yield 'hello'; // 状态值设置为hello
    console.info("result：", result);
    yield "generator";  // 状态值是generator
}

let myIterger = generatorDemo();

console.info(myIterger.next());
console.info(myIterger.next("abc"));
console.info(myIterger.next());