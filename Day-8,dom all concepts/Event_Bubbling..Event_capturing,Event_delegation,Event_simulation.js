/**Event_Bubbling..Event_capturing,Event_delegation,Event_simulation.js */
// Event Bubbling
// 1.When an event occurs on an element, it first runs the handlers on it, then on its
// 2.parent, then all the way up on other ancestors.
// 3.Event Bubbling is the default behavior of the events in the DOM. It is the process of
// events bubbling up from the target element to the root element.


// Event Capturing
// 1.Event Capturing is the opposite of Event Bubbling.
// 2.It is a mechanism that allows a parent element to intercept events for its children.
// 3.Event Capturing is also known as Trickling.
// 4.Event Capturing is rarely used in practice.
// 5.To use Event Capturing, we need to set the third argument of addEventListener to
// true.
// 6. addEventListener('click', function, true);
// 7. The third argument true means that the event listener is set to capture mode.

// Event Delegation
// 1.Event Delegation is a technique in which we put the event listener on a parent
// element instead of putting it on the child elements.
// 2. This is possible because of Event Bubbling.   
// 3. Event Delegation allows us to add a single event listener to a parent element and
// avoid adding multiple event listeners to child elements.
// 4. Event Delegation is useful when we have a parent element with multiple children


// Event Simulation
// 1.Event Simulation is a technique in which we simulate an event programmatically.
// 2. We can simulate events like click, mouseover, mouseout, keyup, keydown, etc.
// 3. We can simulate events using the Event constructor.
// 4. The Event constructor creates a new event.
// 5. The Event constructor takes two arguments, the first argument is the type of event
// and the second argument is an object that contains event-specific initialization
// properties.
// 6. We can dispatch the event using the dispatchEvent method.
// 7. The dispatchEvent method dispatches the event to the target element.

// Event Propagation
// 1.Event Propagation is the process of the event traveling from the target element to
// the root element.
// 2. Event Propagation is of two types: Event Bubbling and Event Capturing.
// 3. Event Bubbling is the default behavior of the events in the DOM.
// 4. Event Capturing is the opposite of Event Bubbling.

const green_box = document.querySelector('.green-box');
const blue_box = document.querySelector('.blue-box');
const pink_box = document.querySelector('.pink-box');

green_box.addEventListener('click',()=>{
    console.log('green box clicked');
})
pink_box.addEventListener('click',()=>{
    console.log('pink box clicked');
})