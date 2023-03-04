
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("playerEl");

let player = {
    name: "Per",
    chips: 145
}
playerEl.textContent = player.name + "$: " + player.chips;

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()* 13) + 1;
    if(randomNumber > 10){
        randomNumber = 10;
    }
    else if(randomNumber === 1){
        randomNumber = 11;
    }
    return randomNumber;
}

function renderGame(){
    cardEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i = i + 1){
        cardEl.textContent = cardEl.textContent + cards[i] + "  ";
    }
    if(sum <= 20){
        message = "Do you want to draw a new card?";
    }
    else if(sum === 21){
        message = "Wohoo! You've got a blackjack";
        hasBlackJack = true;
    }
    else{
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum " + sum;
}

function newCard(){
    if( isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum = sum + card;
        cards.push(card);
        renderGame();
    }
}