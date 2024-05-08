/**This concept will help to learn about the this, scope and closure which is very important topics */

/** Thera are many things that happens behind the scene
 * 1.Tokenizing
 * The code written are break down into a chuncks also called token eg:- let a = "manoj"; to let,a,"manoj",and ;
 * 2.Parsing
 * chunks are now developed into tree where each element of chunks are placed which is also called Abstract Syntax tree(AST)
 * 3.Code Generation
 * Now, the chunks are developed into a Byte code which is processed then......
 */


//lexical Environment
/**Basically there are two  execution context in js*/
//1.Global Execution Context
//2.Function Execution Context

//1.Global Exeecution context
//There are two phases in each contexxt:-
/**1.Creation Phase
 * If there is not any code ,firstly, a global object WINDOW and a global varibale THis is created(window == this)
 * If thera are code then after a global object,this, it will start locating memory for each available variable
 * they get initialized with the value(undefined),if function they get placed in memory...
 * 2.Exection Phase
 *In this phase, actual value for global variable takes place
 *no functions are executed in this phase(it will be in Function Execution Phase)/

/**
  * summary
  * global execution context created,(window and this get created),(variable get initialized with value (((((*Undefined*----> exception while((((Let,const keyword)))))))))
  * execution phase(assigned to original value)
  */


//if call a function then here it is what happens
//Funtion Exection context
/**same preocess creation , execution phase */



// function example(){
    
//     let a = 10;
//     console.log(b)
//     let b = 20;
// }
// example()

//hoisting ---> raising using ropes and pulleys
function outer(){
    let a = 7;
    inner()
    function inner(){
console.log(a)
    }
}
outer()