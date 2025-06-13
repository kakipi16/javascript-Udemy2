//再宣言について
//エラー
// let a = 0;
// let a = 0;

//あとの変数が定義される。
var b = 0;
var b = 1;


//再代入について
let c = 0;
 c = 1
 //1が表示される。

 const d = 0;
  d = 1;
//エラー

{
    let e = 0;
    var f = 0;
    //このvarと
}
//ここでeを定義しようとしても使用できない。
var f = 0;
//このvarは同じ事

console.log(g);
let g = 0;
//console.log(g);はエラー
var h = 0;
//console.log(h);はundefined