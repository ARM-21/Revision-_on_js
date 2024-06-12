


let objForShallowCopy = {
name:"ram",
age:20,
Thau:{
    city:"waling",
    district:"Syangja",
    country:"Nepal"
}
}

let shallowCopy = {...objForShallowCopy};
shallowCopy.Thau.city = "jdshfjds";
console.log(objForShallowCopy);