'use strict';

let a = 4;
{
    a = 5;
    console.log(a);
    let b = 2;
    var c = 4;
}

(function aa(){
    var d = 45;
    console.log(d);
})();

console.log(a);
// console.log(b);
console.log(c);
console.log(d);