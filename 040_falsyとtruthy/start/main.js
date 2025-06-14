//false
let a = 0;
console.log(Boolean(a));

//false
let b = "";
console.log(Boolean(b));

//false
let c = 0n;
console.log(Boolean(c));

//false
let d = null;
console.log(Boolean(d));

//false
let e = undefined;
console.log(Boolean(e));

//false
let f;
console.log(Boolean(f));

//false
let g = NaN;
console.log(Boolean(g));

//これがNaN
let b2 = parseInt("");
console.log(b2);


//プログラムを改定ある時に値が設定されているか確認する場合がある。ときにこの知識が必要になる。

if(b2) {
    console.log("hello");
} else {
    console.log("bey")
}
//not演算子の書き方は値の最初に!をつける
//0を入れたい場合はこの演算子は使えない。
if(!b2) {
    console.log("hello");
} else {
    console.log("bey")
}