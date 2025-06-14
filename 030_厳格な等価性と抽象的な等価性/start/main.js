function printEquality(a, b) {
    console.log(a === b);
    console.log(a == b );
}

let a = '1';
let b = 1;


// let c = true;
// // console.log(b === c); false
// // console.log(b == c ); true
// printEquality(b, c);

let e = "";
let f = 0;
let g = "0";

printEquality(e, f);
 // console.log(e === f); false
 // console.log(e == f ); true

printEquality(g, f);
// // console.log(g === f); false
// // console.log(g == f ); true