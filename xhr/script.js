//what is xhr in js

//XMLHttpRequest is an object in JavaScript that is used to make HTTP requests in JavaScript. It is used to send HTTP or HTTPS requests to a web server and load the server response data back into the script. It is a browser built-in object and it is available in the browser environment.

const xhr = new XMLHttpRequest();
console.log(xhr);
xhr.responseType='json'
xhr.open('GET',"https://dummyjson.com/users")
xhr.send()

xhr.onload = function(callback){

console.log(xhr.response.users)






}