//OR条件を使えば、helloに初期値を当たられる。
function hello(name) {
    //この方法でも良い。
    // name = name || "mike"
    //if分で条件をつける場合にはこの形が良い。
    if(!name) {
        name = name || 'Tom';
    }
    console.log('hello' + name);
}
//hello Bobが出力される
// hello('Bob')


//ただしES6では引数にデフォルト値を含めることができる。
function hello(name = 'Tom') {
    console.log('hello' + name);
}
//hello Tomが出力される。
// hello()

//引数に0を与える場合は注意
function hello(name) {
    name = name || 'Tom'
    console.log('hello' + name);
}
//Tomが出力される。
//0はfalseの値だから
// hello(0)

//AND条件
//これがifを使った基本形
let Name = 'Bob';
if(name) {
    hello(name);
}

//簡略化するとこのように書く
Name && hello(Name)