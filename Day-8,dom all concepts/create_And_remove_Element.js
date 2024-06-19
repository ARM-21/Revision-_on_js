
/**we create a element when there is no already existed element */
//Basically create Element is used to create a any element 
//createdElement("Element existed or non-existed element")
//if non-existed element is created it's default display is inline
//example
//createdElement("div")

let paragraphTag = document.createElement('P')//--->P is in capital it will converted into small p
paragraphTag.innerText = "This is a paragraph tag"
document.body.appendChild(paragraphTag)


//remove element
//remove() is used to remove the element
//example
//remove()
// paragraphTag.remove()//it will remove the paragraph tag
//if we want to remove the element after some time we can use setTimeout() function
//example
//setTimeout(()=>{remove()},3000)


/**removeChild()-----> it will requre child argument to remove the specific element*/
