
//event loop
//callstack
//queue

//callstack is a data structure that records where in the program we are 
//if we call a function, it is added to the callstack
//if we return from a function, it is removed from the callstack
//callstack is a LIFO data structure
//callstack is a synchronous data structure
//callstack is a blocking data structure
//callstack is a single threaded data structure
//callstack is a stack data structure

//queue is a data structure that records what needs to be done
//queue is a FIFO data structure
//queue is a non-blocking data structure
//queue is a multi-threaded data structure



//event loop is a mechanism that makes sure that the callstack is empty before adding the next event


/**this is what happens when asynchrounous code is executed it is part of web browser*/
//*************************************************************************************/
//when we use setTimeout or a asynchronous code in js
//js engine won't run it it will push the code in web apis
//once the time is over it will push the code in callback queue
//event loop will check if the callstack is empty or not
//if it is empty it will push the code from callback queue to callstack
//*************************************************************************************/

