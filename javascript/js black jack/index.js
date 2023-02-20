// let firstName = "Linda";
// let lastname = "Hi there";

// function callingName() {
//    let sum = firstName + " " + lastname;
//     return sum;
// }
// console.log(callingName());


// let myPoints = 3;

// function add3Ponts() {
//     myPoints += 3;
// }

// function remove1Point() {
//     myPoints -= 1
// }
// add3Ponts();
// add3Ponts();
// add3Ponts();
// remove1Point();
// remove1Point();

// let num1 = 8;
// let num2 = 2;
// let num1El = document.getElementById("num1-el").textContent = num1;
// let num1E2 = document.getElementById("num2-el").textContent = num2;
// let sumEl = document.getElementById("sum-el");


// num1.textContent = num1;
// function add() {
//    sumEl.textContent = num1 + num2 ;
// }
// function sub() {
//     sumEl.textContent = num1 - num2;
// }
// function div() {
//     sumEl.textContent = num1 / num2;
// }
// function multi() {
//     sumEl.textContent = num1 * num2;
// }


let msgEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

let player = {
    name: "Uchiha Itachi",
    chips: "1.2 Billion",
    power: function() {
        console.log("Mangakyo sharingon")
    }
}
player.power();
playerEl.textContent = player.name + " " + ":$"+ player.chips;

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 14);
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else return randomNumber
}
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardEl.textContent = "Cards:";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:" + " " + sum;
    if (sum < 20) {
        message = "draw another card";
    } else if (sum === 21) {
        message = "you won the game";
        hasBlackJack = true;
    } else {
        message = "better luck next time ";
        isAlive = false;
    }
    msgEl.textContent = message;
}
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        console.log(cards)
        renderGame();
    }
    
}


person = {
    name: "Monkey D Luffy",
    age: "21",
    country:"Japan"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
}
logData()

 let age = 17;

if (age < 6) {
    console.log("free");
}else if (age < 17) {
    console.log("child discount");
}else if (age < 26) {
    console.log("student discount");
}else if (age < 66) {
    console.log("full price");
}else {
    console.log("senior citizen discount");
}

let largeCountry = ["Japan","India","US","Monaco"];

// for (let i = 0; i < largeCountry.length; i++){
//     console.log(" - " +largeCountry[i]);
// }

largeCountry.pop();
console.log(largeCountry);
largeCountry.push("Japan");
console.log(largeCountry);
largeCountry.shift();
console.log(largeCountry);
largeCountry.unshift("China");
console.log(largeCountry);

let dayOfMonth = 31;
let wwkday = "Friday";

if (dayOfMonth === 31 && wwkday === "Friday") {
    console.log("My GOSH..");
}else {
    console.log("Nothing");
}

let hands = ["rock","paper","scissor"];

function checkoutItem() {
    let randomPick = Math.floor(Math.random() * 3);
    return hands[randomPick];
}
console.log(checkoutItem());

let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

let fruit = ["apple","orange","apple","orange","apple","orange"];

function fruitSort() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "apple") {
            appleShelf.textContent += " apple ";
        }else if (fruit[i] === "orange") {
            orangeShelf.textContent += " orange ";
        }
    }
}
fruitSort();

