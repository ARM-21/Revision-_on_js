let container = document.querySelector('.container');
let addCard = document.querySelector('.add-cart-btn');

let count = 1;


addCard.addEventListener('click', ()=>{
    // let text = ` <div class="card">
    //         <p>Product ${count}</p>
    //     </div>`
let newCard = document.createElement('div');
newCard.classList.add('card');
// let para = document.createElement('p');
// para.innerHTML = `Product ${count}`
// newCard.append(para)
// container.innerHTML += text;
newCard.innerHTML = `<p>Product ${count}</p>`
count++;
container.append(newCard)
})


container.addEventListener(
    'click',
    (e) => {

        console.log(e.target.className)
        if(e.target.tagName == "P"){
            console.log(e.target)
        }
        else if (e.target != container) {
            e.target.remove();
        }
      
    },true
)

