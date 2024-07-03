let totalApple = 10;
let secondBasketApple = 0;
let firstBasketApple =totalApple - secondBasketApple;

const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
let leftBasket = document.querySelector('.basket-1 span')
leftBasket.innerHTML = totalApple;
let rightBasket = document.querySelector('.basket-2 span')

leftButton.addEventListener('click',()=>{
    if(firstBasketApple>0){
    firstBasketApple--;
    leftBasket.innerHTML = firstBasketApple;
    secondBasketApple++;
    rightBasket.innerHTML = secondBasketApple;
    }
})
rightButton.addEventListener('click',()=>{
    if(secondBasketApple>0){
    firstBasketApple++;
    leftBasket.innerHTML = firstBasketApple;
    secondBasketApple--;
    rightBasket.innerHTML = secondBasketApple;
    }
})