/**
 * 問題１：
 * obj.prop1の値をminus関数を用いて-1したい
 * と思いました。
 * しかしminus関数実行後のobj.prop1の値は変
 * わっていませんでした。
 * 以下のminus関数をどのように修正すればobj.prop1
 * の値を変更することができるでしょうか？
 *
 */
//自分の解答
let obj = {
    prop1: 10
}

// function minus(obj, val) {
//     let prop1 = obj.prop1;
//     prop1 = prop1 - val;
//     console.log(prop1);
// }
// minus(obj, 1);

//解答
function minus2(obj, val) {
    obj.prop1= obj.prop1 - val;
}

minus2(obj, 1);
console.log(obj.prop1)
/**
 * 問題２：
 * double関数を使ってobj.prop1の値を２倍にしたい
 * と思っていました。しかし、コンソールに表示された
 * のは元の値である'9'でした。
 * どうすれば、'18'が表示されるようになるでしょうか？
 * 
 * '18'が表示されるように、double関数内を修正してください。
 */
//自分の答え
//全くわからなかった。

//解答
function double(obj) {
    obj.prop1 = obj.prop1 * 2;
}
double(obj);
console.log(obj.prop1);


/**
 * 問題３：
 * 以下のコードでfn関数を実行した後にprop3の
 * 値を出力した場合に1、2、3のどれが出力
 * されるか、そして*なぜそのようになるのか*を
 * 考えてみてください。
 */
// obj.prop2 = {
//     prop3: 1
// }

// function fn({ prop2 }) {
//     let prop = prop2;
//     prop.prop3 = 2;
//     prop = { prop3: 3 };
//     return { prop2: prop };
// }
// obj = fn(obj);
// //自分の解答　
// // 1
// //理由は関数内の値では更新されないと思った。
// console.log(obj.prop2.prop3);

// -----------------------------------------------
function fn({ prop2 }) {
    let prop = prop2;
    prop.prop3 = 2;
    //最後のpropの値を見てどの値になるかを考える。
    prop = { prop3: 3 };
    //ここがobjになる。
    return { prop2: prop };
}
//fnの実行結果がはいってくるから
obj = fn(obj);
//解答　
//3
console.log(obj.prop2.prop3);

/**
 * 問題４：
 * through関数を経由して格納されるobj2は
 * objと等価でしょうか？
 */
// function through (obj) {
//     return obj;
// }

// const obj2 = through(obj);
// //自分の解答
// //false
// console.log(obj === obj2);

function through (obj) {
    return obj;
}

// const obj2 = through(obj);
//解答
//true
console.log(obj === obj2);
