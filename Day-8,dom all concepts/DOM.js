//DOM (document object model in javascript)
/**DOM is a structure where all the written tags,elements are arranged as a tree, with the help of it we can 
actually access each element of it with a object called document*/


//1. Accessing the elements by id, class, tag, name
//example:-
//document.getElementByid()---> to access a element of document
//document.getElementByClassName()---> to access a element of document
//document.getElementByTagName()---> to access a element of document
//document.getElementByName()---> to access a element of document
//document.querySelector()---> to access a element of document
//document.querySelectorAll()---> to access a element of document


/**each element is created as a <------object-----> and as a properties in memory by parser that's why we can access each element. */


//--------------------------------------->/**Array like object */<-------------------------------------
//Array like object are not a array because we cannot use map,reduce,filter



//innerText,innerHTML,textContent--->difference--->





/****************************************************************************************************** */

//--------------------------------------->NOdelist<---------------------------------------we can use forEach
//NodeList is a collection of nodes. It is an array-like object but not an array. It is a collection of nodes returned by properties such as the children of an element, document.querySelectorAll, and others.
//NodeList is not an array, but it has a length property and can be iterated over
//NodeList is a collection of nodes, and nodes can be elements, text nodes, comments, etc.




//<-------------------------------------HTML Collection------------------------------------->cannot use forEach should be converted[.....name] or Array.from().
//HTMLCollection is a collection of HTML elements. It is an array-like object but not an array. It is a collection of HTML elements returned by properties such as document.getElementsByClassName, document.getElementsByTagName, and others.





/////-----------------------------------------<For optimization>-----------------------------------------////
//if we use document.querySelector()--> it will search for the specific element in a entire element in page
//--------------------------------------------important-----------------------------------------------///
//we can use element.querySelector('selector')--> to search in a specific element childs,,