//静态作用域和动态作用域
//js为静态作用域：即函数作用域在函数创建时就已经确定了
//执行 foo 函数，先从 foo 函数内部查找是否有局部变量 value，如果没有，就根据书写的位置，查找上面一层的代码，也就是 value 等于 1，所以结果会打印 1。
var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar();


/*
两段代码都会打印：local scope。
原因也很简单，因为JavaScript采用的是词法作用域，函数的作用域基于函数创建的位置。

 */
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();


var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();