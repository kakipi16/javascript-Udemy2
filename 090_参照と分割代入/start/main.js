//分割代入
const a = {
    prop: 0
}
//オブジェクトのプロパティ命名だけで操作ができる。
let { prop } = a;

prop = 'bye'
//{prop: 0}とbeyが出力される。
console.log(a, prop)