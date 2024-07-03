//what is xhr in js

//XMLHttpRequest is an object in JavaScript that is used to make HTTP requests in JavaScript. It is used to send HTTP or HTTPS requests to a web server and load the server response data back into the script. It is a browser built-in object and it is available in the browser environment.

///using callback ----> cons ----> callback hell
const xhr = new XMLHttpRequest();
console.log(xhr);
xhr.responseType='json'
xhr.open('GET',"https://dummyjson.com/users")
xhr.send()


xhr.onload = function(callback){

console.log(xhr.response.users)


}

//using promises to solve callback hell
function makeHttpRequest(){
const xhr = new XMLHttpRequest();
console.log(xhr);
xhr.responseType='json'
xhr.open('GET',"https://dummyjson.com/users")
xhr.send()

return new Promise((res,rej)=>{
xhr.onload = function(callback){
    if(xhr.status >= 200 && xhr.status < 300){
        res(xhr.response)
    }
    else{
        rej(xhr.statusText);
}
}
});


}


//<--------------------------------------using fetch api------------------------------------>

fetch("https://dummyjson.com/users").then((res)=>{ return res.json()}).then((data)=>{console.log(data)})
///////////////////note fetch is also a asynchoronous code so the --> then method callback fn is passes to 
//the microtask queue and will be executed after the call stack is empty
//what is microtask queue?
//The microtask queue is a queue of tasks that are executed after the current task and before the next task in the event loop. Microtasks are usually tasks that are higher priority than the normal tasks in the event loop, such as promises and mutation observers.


//<-------------------------------------using async await----------------------------------------->