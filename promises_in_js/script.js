//what is promise in js
//promise is an object that may produce a single value some time in the future
//either a resolved value or a reason that it's not resolved
// <---------------------------------------------------------------------------------->
//a promise may be in 3 possible states: fulfilled, rejected, or pending
//<----------------------------------------------------------------------------------->

//promises are hanlded by browser special object

// const resolvBtn = document.querySelector("#Resolver");
// const rejectBtn = document.querySelector("#rejector");

// const p = new Promise((res, rej) => {
//   resolvBtn.addEventListener("click", () => {
//     res("sucess");
//   });
//   rejectBtn.addEventListener("click", () => {
//     rej("failure");
//   });
// });
// p.then((res) => {
//   console.log(p);
//   console.log(res);
// }).catch((err) => {
//   console.log(p);
//   console.log(err);
// });

const roleModify = document.querySelector('.role');
const roles = ["Software Developer", "fresher", "react developer"];

let count =0;
let innerCounter =0;
const interval = setInterval(()=>{
  if(count >= roles.length){
    count =0;
    roleModify.innerText = ""

  }
  else{
    if(innerCounter >= roles[count].length){
        innerCounter = 0;
        roleModify.innerText = ""
        count++
    }
    else{
      console.log(roles[count][innerCounter])
      roleModify.innerHTML += roles[count][innerCounter];
      innerCounter++;
      
    }
  }
},100)


// function modyfier(arr) {
//   let count = 0;
//   let len = arr[count].length;
//   let innerCounter = 0;
//   setInterval(() => {
//     // debugger;
//     if (count >= roles.length) {
//       count = 0;
//     } else {
//       // debugger
//       for (let i of arr[count]) {
        
//         console.log(roleModify.innerHTML)
        
//         roleModify.innerHTML += i;
//         innerCounter++;
//         if (innerCounter >=len) {
//           innerCounter = 0;
//           roleModify.innerHTML = "";
//           count++;
//         }
//       }
//     }
//   }, 1000);
// }
// modyfier(roles);
