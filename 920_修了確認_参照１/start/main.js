/**
 * 問題：
 * 以下の操作を行った際にコンソールで表示される
 * 値はどうなるでしょうか？結果を考えてみてください。
 */
let val = 0;
let val2 = val;
val2 = 1;
// 0　OK
console.log(val); // 問題１

let obj = {
    prop1: 10
}
const obj2 = obj;
obj2.prop1 = 9;
//10 オブジェクトは参照を保持しているだけだから、元の値は同一。
//正解は{prop1: 9}
console.log(obj); // 問題２

function fn1(arg) {
    arg.prop2 = 8;
    return arg;
}
let obj3 = fn1(obj2);
//{prop1:9, prop2:8} OK
console.log(obj); // 問題３

function fn2(arg) {
    arg = {};
    return arg;
}
const obj4 = fn2(obj); // 問題４
//{}  obj4には{}が代入されているが元の値は変わってはいない。
console.log(obj); // 問題４
// console.log(obj4);