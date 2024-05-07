// for of is mainly is used for array and string
// for in is mainly used for object

let arr = [1,2,3,4]
for( let a in arr){
console.log(a)
}
// for of will take the value where as in  takes indexes

// destructoring is possible in functions parameter also
// eg
function des(a,[b,c,d="default params"]){//destructoring in parameter of object
    console.log(a,b,c,d)
}
des('a',['h','b'])


// destructering in object is also same 
let obj = {
    name:"a",
    age:20,
    city:"b"
}
function hell(a,{name,...res}){
    console.log(a,name,res)
}

// recursive function
hell("hell",obj)



// closure
function outer(a,b){

    return function inner(a,b){
console.log(a+b)
    }
}

outer(1,2)(3,2)


// we can see the length of params of function


// iife
// (function(){
//     console.log("iife")
// })()




// how to a function is object
// here we add properties in function that's why function is  obj
outer.add = "hello"
console.log(outer.add)

// we also can use this keyword in function it means it is refrencing to object
//also called object function constructor
function objectexample(a){
    this.name = a;
}

let instance = new objectexample("manoj")
console.log(typeof instance)//It shows type object to function