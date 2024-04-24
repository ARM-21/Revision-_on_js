/* In js there is parent object class when object of anything is created than it will inherit all the prop
erties of the parent object*/ 



// creation of object is done in this way
let obj = {
    name:"man",
    author:"hari",
    city:{
        name:"hello"
    }
}
console.log(Object.keys(obj))

// I can access the each property using dot operator 
//  also to gain more methods of object we can access it using Object class as shown above

console.log(Object.assign({},obj))


// there is a weird part in js while using const
const details = {
name:'manoj',
roll:12


}
// even though we created it const ------we can still make changes in it's value but cann't replace the whole key and values inside it eg details ={}
details['newi'] = 'hello';//this is possible
console.log(details)


// to make const object unchangeable we use Object.freeze() method to lock any object eg:

/**also there is a point even though we used freeze js will not treat it strictly */
const freezedObject = Object.freeze({
    name:'freezeed',
    roll:12
})
freezedObject['tori'] = "full";//after using freshing also again can assign the value in it
/**so, to avoid assigning value we will be using strict mode */
  
//using strict mode
"use strict"
const freezed_Object_After_Using_Strict = Object.freeze({
    name:'freezeed',
    roll:12
})
freezed_Object_After_Using_Strict['tori'] = "full";//this is not going to happen after using strict with freeze()
console.log(freezed_Object_After_Using_Strict)

// note :- use strict is applicable only in this file

// deep freeze is also known as shallow(Ajakalto) freezer because it cannot freeze the assignment of value of 
// inner object inside outer object

const freezer_Not_Working_In_Nested_Object = Object.freeze({
name:{
    roll:'12'
}

})

freezer_Not_Working_In_Nested_Object.name['roll'] = '15'//assingment in const happenned
console.log(freezer_Not_Working_In_Nested_Object)



/** this is a method to check a object is frozen or not isFrozen() */