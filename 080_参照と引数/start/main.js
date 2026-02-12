let a = 0;

function fn1(arg1) {
    arg1 = 1;
    //0 1が出力される
    console.log(a , arg1)
}

fn1(a);

//上記と一緒
let arg1 = a;
arg1 = 1;
console.log(a, arg1)

//constだと　arg2 = {};は再代入されない。
let b = {
    prop: 0
}

function fn2(arg2) {
    arg2.prop =1;
    //参照元のオブジェクトも変更される。
    //{prop:1}{prop:1}
    console.log(b, arg2);
}

fn2(b);

function fn3(arg2) {
    arg2 = {};
    //参照元は変更されずarg2は新しいオブジェクトを参照している。
    //{prop:0}{}
    console.log(b, arg2);
}

fn3(b);