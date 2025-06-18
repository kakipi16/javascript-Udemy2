//分割代入
const a = {
    prop: 0
}
//オブジェクトのプロパティ命名だけで操作ができる。
let { prop } = a;

prop = 'bye'
//{prop: 0}とbeyが出力される。
console.log(a, prop);

//関数の分割代入定義方法
function fn(obj) {
    let { prop } = obj;
    prop = 1;
    console.log(obj, prop);
}

fn(a);

//特定のプロパティの時は簡略化できる。
//分割代入でプロパティを抽出した時点で元のオブジェクトとは異なるものになる。
function fn({ prop }) {
    prop = 1;
    console.log(a, prop);
}

fn(a);

//オブジェクトが多階層の場合

const c = {
    prop1: {
        prop2: 0
    }
}
//この定義で子階層に参照にも影響している。
let { prop1 } = c;
console.log(prop1);
//この変更で元のオブジェクトにも影響を与える。
prop1.prop2 = 1;

console.log(c, prop1);