// Types of function 
/**1.First class function
 * ---->Higher order function-->This used to make code optimized and reuse and make code less.
 * ---->callback-function
 */


// // for example
// const add =(a,b)=>a+b;
// const sub =(a,b)=>a-b;
// const mul =(a,b)=>a*b;

// function calculate(fn){
// console.log(fn)

// }
// calculate(add(2,3));

// i can make logic part different and then pass it as a callback function which also higher order function

/**
 * some of the higher order function are:-
 * map(),filter(),sort(),reduce(),forEach(()=>{})
 */

// forEach combined of for-in,for-of
// ------------->It doesn't return any thing--------------->
// let arr =[2,3,4,5];
// arr.forEach((value,index,array)=>{
//     console.log(value);
// });

// map()-->It is used to return new array--->used to transform a array into new form of array.
/**---we can return a value , manipulate a each value and returns a new array which contains each value mofified */



// let arr1 =[2,3,4,5];//initally value is as it is
// let modifiedArr = arr1.map((value)=>{
//     //now,each value is modified and added into a new array in each loop
// return value *2;//Eventually, it will return a array after finished
// })
// console.log(modifiedArr)







// filter()-->It is used to return new array--->used to filter out the value from array.

// /** */
// let filterValue = arr1.filter((value)=>{
// return value%2==0 //it will return a array which contains only even number

// })
// console.log(filterValue)


// for object
// let objExample =[
//     {name:"manoj",
//         age:19,
//     },
//     {
//         name:"her",
//         age:19,
//     },
//     {
//         name:"manoj2",
//         age:20,
//     }
// ]
// let filteredValue2 = objExample.filter((value)=> value.name == "manoj")
// filteredValue2


// reduce()-->It is used to return a single value--->used to reduce the array into a single value.

// let reduceValue = arr1.reduce((prev,curr)=>{
//     console.log(prev)   
//     console.log(curr) 
// },0);//0 is initial value of 

// sort() --> by default sorts on the basis of string for number as well.
// let a =[1,111,333,222,2,444]
// let sortValue = arr1.sort((a,b)=>a-b);

// keyword--->UTF-16 encoder mapping value for each character

//to make sorting work in number we should use higher order function or a function to pass as a arguments.
//for example

// let sortValue2 = arr1.sort((a,b)=>a-b);
/**if a-b is +ve a will added first and b
//if a-b is -ve b will added first and a
*/


                                        /**CallBack function in js */
//It is a function which is passed as a argument to another function and whihc is executed after a execution of parent function is at ending.
/**IT is commonly used in asynchronous progamming to hanlde a the task like api requests,user input */


// for example
// (function fetchedData(callback){
// setTimeout(()=>{
// let data = "hahhhahah"
// // data is getting after few times
// //so after getting data i will then call the callback function
// callback(data);
// },2000)

// })(gotData)

// function gotData(data){
// console.log(data);
// }

// code isolation,handle aysnchrounous 
//callback is determined by parent function
//callback destiny is determined by parent function whether it get data or not
// debugger
// let ann = "name";
// var value = "man";
// function hello(){
//     console.log("Hello");
// }
debugger

console.log(c);
function add(a,b){

    return a+b;
}
function multiply(a,b){
    return a*b;}

// closure
function outer(){
        let count = 0;
        function inner(){
                count++;
                console.log(count);
            }
            return inner;
        }
        let innerFunc = outer();
        innerFunc();
var c= 20;
let a =10;