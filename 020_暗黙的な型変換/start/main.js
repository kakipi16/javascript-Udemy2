function printTypeAndValue(val) {
    console.log(typeof val, val )
}

let a = 0;
//number型 0
printTypeAndValue(a);

let b = parseInt("1") + a;
//string型の10
printTypeAndValue(b);

let c = 15 - b;
//number型 5
printTypeAndValue(c);

let d = c - null;
//number 5
printTypeAndValue(d);

let e = d - true;
// number 4
printTypeAndValue(e);