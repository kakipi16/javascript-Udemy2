// //プリミティブ型の参照とコピー
// let a = 'Hello';

// //Helloが別のメモリ空間にコピーされる。
// let b = a;

// //bの参照先が変更される。
// b = 'Bey';
// //Helloが出力される。
// console.log(a);


// //ブジェクトの参照とコピー
// //aが{}へ参照を保持
// //{prop}からHelloへ参照を保持
// let a = {
//     prop: 'Hello'
// };
// //ｂが{}へ参照を保持
// let b = a;
// //{prop}が'Bey'へ参照を保持。
// b.prop = 'Bey';
// //Beyが出力される。
// console.log(a.prop);


//元の参照先は変わらない。

let a = 'hello'
let b = a;
b = 'bey';
//aは''hello'が出力される。
//bは'Bey'が出力される。
console.log(a, b);


let c = {
    prop: 'hello'
}

let d = c;
//どちらもhelloが出力される。
console.log(c, d);

d.prop ='bey';
//どちらもbeyが出力される。
console.log(c, d)

//オブジェクトのpropが変更された場合は元のオブジェクトも変更される。

d = {};
console.log(c, d)