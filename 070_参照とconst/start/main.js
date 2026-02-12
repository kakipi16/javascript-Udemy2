//プリミティブ値の再代入
const a = 'Hello';

//エラー
// a = 'bey'

//オブジェクトの再代入
const b = {
    prop: 'Hello'
}
//エラー
// b = {}

b.prop = 'bey';
//beyが出力される
console.log(b);

//オブジェクトの値に対しては再代入可能