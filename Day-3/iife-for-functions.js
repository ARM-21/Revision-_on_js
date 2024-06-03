// for of is mainly is used for array and string
// for in is mainly used for object

// let arr = [1,2,3,4]
// for( let a in arr){
// console.log(a)
// }
// for of will take the value where as in  takes indexes

// destructoring is possible in functions parameter also
// eg
// function des(a,[b,c,d="default params"]){//destructoring in parameter of object
//     console.log(a,b,c,d)
// }
// des('a',['h','b'])


// destructering in object is also same 
// let obj = {
//     name:"a",
//     age:20,
//     city:"b"
// }
// function hell(a,{name,...res}){
//     console.log(a,name,res)
// }

// recursive function
// hell("hell",obj)



// closure
// function outer(a,b){

//     return function inner(a,b){
// console.log(a+b)
//     }
// }

// outer(1,2)(3,2)


// we can see the length of params of function


// iife
// (function(){
//     console.log("iife")
// })()




// how to a function is object
// here we add properties in function that's why function is  obj
// outer.add = "hello"
// console.log(outer.add)

// we also can use this keyword in function it means it is refrencing to object
//also called object function constructor
// function objectexample(a){
//     this.name = a;
// }

// let instance = new objectexample("manoj")
console.log(typeof instance)//It shows type object to function



//revising
// let obj2 = {
//     name:"manoj",
//     age:23,
// }

// let{name:hello,age} = obj2;
// console.log(hello)
// console.log(age)


// array destructuring

// let arr2 = [1,2,3,4,5]
// let [a,b,c,d,e] = arr2;
// console.log(a)
// console.log(b)

// console.log(c)

// console.log(d)

// console.log(e)


// array destructuring with rest operator

// let arr3 = [1,2,3,4,5,6,7,8,9,10]
// let [a1,b1,c1,...rest] = arr3;
// console.log(a1)
// console.log(b1)
// console.log(c1)

// console.log(rest)


// array destructuring with rest operator       

console.log(22-"22")

let arr = [2,4,"manoj"];
let [a,b,c] = arr;

let obj = {"name":manoj,age:12,hero:"an"};
let {name:tan,...rest}= obj;