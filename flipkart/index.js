let shopingCategory = [
    {
        name: "Electrinics",
        img: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`
    },
    {
        name: "TVs & Appliances",
        img: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`
    },
    {
        name: "Men",
        img: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`
    },
    {
        name: "Women",
        img: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`
    },
    {
        name: "Baby & Kids",
        img: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`
    },
    {
        name: "Home & Furniture",
        img: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`
    },
    {
        name: "Sports,Bools & More",
        img: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`
    },
    {
        name: "Flights",
        img: ""
    },
    {
        name: "Offer Zone",
        img: ""
    }

]


let shoppingContainer = document.createElement("div");
shoppingContainer.classList.add("shoppig-container");

let shoppingListEl = document.getElementById("shopList-el");

function shopList() {
    for(let i = 0; i < shopingCategory.length; i++) {
         let firstSopping = document.createElement("span");
         firstSopping.classList.add("category")
         shoppingListEl.appendChild(firstSopping);
         firstSopping.innerHTML = shopingCategory[i].name;

         let scrollIcon = document.createElement("span");
         scrollIcon.classList.add("downImg")
         shoppingListEl.appendChild(scrollIcon);
         scrollIcon.innerHTML = shopingCategory[i].img;
    }
}
shopList();



// let num = prompt("enter a number");

// sum = 0;

// function sumAll() {
//     for (let i = 0; i < num; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }

//  console.log(sumAll(sum));

// function x() {
//     var a = 10;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }

// var z = x();
// console.log(z);
// z();

// function x() {
//     for (var i = 1; i < 5; i++){
//         function b (){
//             console.log(i);
//         }
//         b();
//     }
 
// }
// x();

// function ab() {
//     for (var i = 1; i <= 5; i++) {

//         function closer(i) {
//             setTimeout(function () {
//                 console.log(i)
//             }, 2000)
//         }
//         closer(i);
   
//     }

// }
// ab();

// function counter() {
//     var count = 0;
//     return function increamentCounter() {
//         count ++;
//         console.log(count)
//     }
    
// }
// let ab = counter1();
// var counter1 = counter();
// console.log(counter1);
// counter1();

// function theOutPut() {
//     function theFirst(){
//         theOutPut("helo");
//     }
    
//     function theSecond() {
//         theOutPut("bye");
//     }
// }
// theFirst();
// theSecond();


