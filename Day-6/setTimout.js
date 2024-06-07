


// setTimeout and setInterval are asynchronous code in js

// setTimeout is used to run a function after a certain amount of time has passed
// setInterval is used to run a function repeatedly after a certain amount of time has passed

//firstly synchronous code is run and then asynhronous code is executed in js
//for example

setTimeout(() => {
    console.log("World");
});//asynchronous code, this will run after
console.log("Hello");//this will run firstly

setTimeout(`console.log("hello")`,2000)//we can pass string in it

//There is concept of callstack queue and event loop in js

