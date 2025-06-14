const a = 0;
const b = 0;
const c = 3;
const d = 0;
//&&はfalseが出た時点でその条件を返す
//すべてtrueなら一番右の値を返す。
console.log(a && b && c);

//||はtrueが出た時点でその条件を返す
//すべてfalseなら一番右の値を返す。
console.log(a || b || c);

//混在して書く場合もある。

//このように書くとどんな処理かわかりにくくなってしまう。
console.log(a || b && c);

//その際はグループ化をする事が多い。
//こうするとグループ化のOR条件が終わった後にAND条件を実行する。
console.log((a || b) && (c || d));