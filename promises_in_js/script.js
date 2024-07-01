//what is promise in js
//promise is an object that may produce a single value some time in the future
//either a resolved value or a reason that it's not resolved
// <---------------------------------------------------------------------------------->
//a promise may be in 3 possible states: fulfilled, rejected, or pending
//<----------------------------------------------------------------------------------->




const resolvBtn = document.querySelector('#Resolver');
const rejectBtn = document.querySelector('#rejector');

const p = new Promise((res,rej)=>{
    resolvBtn.addEventListener('click',()=>{
    res('sucess');
    }
    );
    rejectBtn.addEventListener('click',()=>{
        rej('failure');
    }
    );


});
p.then((res)=>{
console.log(p)
    console.log(res);
}
).catch((err)=>{
    console.log(p)
        console.log(err)});