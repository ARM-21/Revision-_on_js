const button = document.querySelector(".add-card");
const container = document.querySelector(".container")
let count =1;
button.addEventListener('click',(e)=>{
let newCard = document.createElement("div");
newCard.classList.add('card');
newCard.innerText = count++;
container.append(newCard);


})