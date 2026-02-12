const a = {
	prop: 0
}

const b = {
	prop: 0
}

const c = a;
//これならtrueになる。
//
console.log(a === c);

//結果はfalse
//オブジェクトを比較するとオブジェクトの参照同士を確認するためfalseになる。
//これでは正確な比較ではない。
console.log(a === b);

//これでオブジェクトが参照している先の値を確認することができる。
console.log(a.prop === b.prop);