


/**
 * Scope in javascript
 * block level scope
 * local Scope
 * Global scope
 * 
 * ////////this scope is created in creation phase ----> also called scope chaining/////////////
 * ----Block Scope--- is decalred using braces eg:{  }--->block will appear in dev tool while debugging,if,for
 * ----Local Scope--- is scope of function funtion(){}
 * ----GLobal scope--- is scope of whole module
 * ----lexical scope---- is a scope of all of it's parents including global
 */

// 1. Global Scope
var a = 1;
let b = 2;
const c = 3;
console.log('Global Scope: ', a, b, c);
// 2. Block Scope
if (true) {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Block Scope: ', a, b, c);
}

//3.local scope
function test() {
    var a = 7;
    let b = 8;
    const c = 9;
    console.log('Local Scope: ', a, b, c);
}
//4. lexical scope
function test1() {
    var a = 10;
    let b = 11;
    const c = 12;
    console.log('Local Scope: ', a, b, c);
    if (true) {
        var a = 13;
        let b = 14;
        const c = 15;
        console.log('Block Scope: ', a, b, c);//it's lexical scope is it;'s own scope and test()1 scope.
    }
}


///var scope is functional level scope
///let and const have block level scope
