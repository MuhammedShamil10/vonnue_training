<<<<<<< HEAD
<<<<<<< HEAD
let categories = [{
    name: "Electronics",
    img: ""
    },
    {
        name: "TVs & Appliances",
        img: ""
    },
    {
        name: "Men",
        img: ""
    },
    {
        name: "Women",
        img: ""
    },
    {
        name: "Baby & Kids",
        img: ""
    },
    {
        name: "Home & Furniture",
        img: ""
    },
    {
        name: "Sports,Book & More",
        img: ""
=======
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
>>>>>>> 77b2e42 (twoNav)
    },
    {
        name: "Flights",
        img: ""
    },
    {
<<<<<<< HEAD
        name: "offer Zone",
        img: ""
    }

    
]
=======
let num = prompt("enter a number");

sum = 0;

function sumAll() {
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
=======
        name: "Offer Zone",
        img: ""
>>>>>>> 77b2e42 (twoNav)
    }

<<<<<<< HEAD
console.log(sumAll(sum))
>>>>>>> afeced3 (feat:nav)
=======
]

let shoppingContainer = document.createElement("div");
shoppingContainer.classList.add("shoppig-container");

let shoppingListEl = document.getElementById("shopList-el");

function shopList() {
    for(let i = 0; i < shopingCategory.length; i++) {
         let firstSopping = document.createElement("span");
         firstSopping.classList.add("category");
         shoppingListEl.appendChild(firstSopping);
         firstSopping.innerHTML = shopingCategory[i].name;

         let scrollIcon = document.createElement("span");
         scrollIcon.classList.add("downImg");
         shoppingListEl.appendChild(scrollIcon);
         scrollIcon.innerHTML   = shopingCategory[i].img;
    }
}
shopList();


let mobiles = [
    {
      img: `https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/e/l/d/-original-imagnhusa2upmgeq.jpeg?q=70`,
      favIcon: "Assets/img/flipFav.svg",
      phoneName: "APPLE iPhone 14(Yellow, 128 GB)",
      rating: `4.7 <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="13" height="12"><path fill="#FFF" d="M6.5 9.439l-3.674 2.23.94-4.26-3.21-2.883 4.254-.404L6.5.112l1.69 4.01 4.254.404-3.21 2.882.94 4.26z"></path></svg>`,
      review: "22,308 Rating & 880 Reviews",
      price: "",
      actualPrice: "79,900",
      percentage: "9%",
      off: "off"
    },
    {
        img: `https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/l/8/r/-original-imaghxemnnnkd8bg.jpeg?q=70`,
        favIcon: "Assets/img/flipFav.svg",
        phoneName: "APPLE iPhone 14 Pro(Deep Purple, 128 GB)",
        rating: `4.7 <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="13" height="12"><path fill="#FFF" d="M6.5 9.439l-3.674 2.23.94-4.26-3.21-2.883 4.254-.404L6.5.112l1.69 4.01 4.254.404-3.21 2.882.94 4.26z"></path></svg>`,
        review: "864 Rating & 71 Reviews",
        price: "",
        actualPrice: "1,22,999",
        percentage: "5%",
        off: "off"
      },
      {
        img: `https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/k/1/o/-original-imagmg6gz3bsgan7.jpeg?q=70`,
        favIcon: "Assets/img/flipFav.svg",
        phoneName: "SAMSUNG Galaxy S23 Ultra 5G(Cream, 256 GB)",
        rating: `4.1 <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="13" height="12"><path fill="#FFF" d="M6.5 9.439l-3.674 2.23.94-4.26-3.21-2.883 4.254-.404L6.5.112l1.69 4.01 4.254.404-3.21 2.882.94 4.26z"></path></svg>`,
        review: "22,308 Rating & 880 Reviews",
        price: "",
        actualPrice: "1,24,999",
        percentage: "16%",
        off: "off"
      },
      {
        img: `https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/c/1/h/-original-imagmg6gcjyuvzvn.jpeg?q=70`,
        favIcon: "Assets/img/flipFav.svg",
        phoneName: "SAMSUNG Galaxy S23 5G(Phantom Black, 256 GB)",
        rating: `4.7 <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="13" height="12"><path fill="#FFF" d="M6.5 9.439l-3.674 2.23.94-4.26-3.21-2.883 4.254-.404L6.5.112l1.69 4.01 4.254.404-3.21 2.882.94 4.26z"></path></svg>`,
        review: "22,308 Rating & 880 Reviews",
        price: "",
        actualPrice: "94,999",
        percentage: "9%",
        off: "off"
      },
      {
        img: `https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70`,
        favIcon: "Assets/img/flipFav.svg",
        phoneName: "APPLE iPhone 13(Blue, 128 GB)",
        rating: `4.7 <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="13" height="12"><path fill="#FFF" d="M6.5 9.439l-3.674 2.23.94-4.26-3.21-2.883 4.254-.404L6.5.112l1.69 4.01 4.254.404-3.21 2.882.94 4.26z"></path></svg>`,
        review: "1,96,141 Rating & 10,721 Reviews",
        price: "",
        actualPrice: "69,900",
        percentage: "9%",
        off: "off"
      },
      {
        img: `https://rukminim1.flixcart.com/image/312/312/l0fm07k0/mobile/1/k/g/-original-imagc7ukmgugpdfy.jpeg?q=70`,
        favIcon: "Assets/img/flipFav.svg",
        phoneName: "realme C35(Glowing black, 64 GB)",
        rating: `4.4 <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="13" height="12"><path fill="#FFF" d="M6.5 9.439l-3.674 2.23.94-4.26-3.21-2.883 4.254-.404L6.5.112l1.69 4.01 4.254.404-3.21 2.882.94 4.26z"></path></svg>`,
        review: "1,74,850 Rating & 9,939 Reviews",
        price: "",
        actualPrice: "13,999",
        percentage: "21%",
        off: "off"
      },
      {
        img: `https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/y/9/g/-original-imagnfzyhh8gz8sd.jpeg?q=70`,
        favIcon: "Assets/img/flipFav.svg",
        phoneName: "POCO C55(Cool Blue, 128 GB)",
        rating: "",
        review: "",
        price: "",
        actualPrice: "13,999",
        percentage: "21%",
        off: "off"
      },
      {
        img: `https://rukminim1.flixcart.com/image/312/312/l2jcccw0/mobile/i/1/y/-original-imagdu8gtefvchbn.jpeg?q=70`,
        favIcon: "Assets/img/flipFav.svg",
        phoneName: "POCO M4 5G(Yellow, 128 GB)",
        rating: `4.2 <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="13" height="12"><path fill="#FFF" d="M6.5 9.439l-3.674 2.23.94-4.26-3.21-2.883 4.254-.404L6.5.112l1.69 4.01 4.254.404-3.21 2.882.94 4.26z"></path></svg>`,
        review: "29,519 Rating & 2,248 Reviews",
        price: "",
        actualPrice: "18,999",
        percentage: "26%",
        off: "off"
      },
      {
        img: `https://rukminim1.flixcart.com/image/312/312/kzhbfrk0/mobile/0/r/j/-original-imagbgxffuvx56mm.jpeg?q=70`,
        favIcon: "Assets/img/flipFav.svg",
        phoneName: "OPPO Reno Pro 5G(Starlight black, 256 GB)",
        rating: `4.3 <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="13" height="12"><path fill="#FFF" d="M6.5 9.439l-3.674 2.23.94-4.26-3.21-2.883 4.254-.404L6.5.112l1.69 4.01 4.254.404-3.21 2.882.94 4.26z"></path></svg>`,
        review: "8,269 Rating & 1089 Reviews",
        price: "",
        actualPrice: "47,990",
        percentage: "27%",
        off: "off"
      },
      {
        img: `https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/d/u/7/-original-imagmgy5ywvzdv6g.jpeg?q=70`,
        favIcon: "Assets/img/flipFav.svg",
        phoneName: "APPLE iPhone 14(Starlight, 128 GB",
        rating: `4.3 <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="13" height="12"><path fill="#FFF" d="M6.5 9.439l-3.674 2.23.94-4.26-3.21-2.883 4.254-.404L6.5.112l1.69 4.01 4.254.404-3.21 2.882.94 4.26z"></path></svg>`,
        review: "3,845 Rating & 400 Reviews",
        price: "",
        actualPrice: "38,999",
        percentage: "23%",
        off: "off"
      }
]


let mobileContainerEl = document.getElementById("products-el");



function brandCategory() {
    for (let i = 0; i < mobiles.length; i ++) {
        let brandName = document.createElement("div");
        brandName.classList.add("product-container");
        mobileContainerEl.appendChild(brandName);
        let productImg = document.createElement("span");
        productImg.classList.add("mobileImg");
        brandName.appendChild(productImg);
        let favIcons = document.createElement("img");
        productImg.appendChild(favIcons);
        favIcons.src = mobiles[i].favIcon;

        let productName = document.createElement("span");
        productName.classList.add("productName");
        brandName.appendChild(productName);
        productName.innerHTML = mobiles[i].phoneName;

        
    }
}
brandCategory();



// namaste javascript....:-



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
// getName();
// console.log(x);
// console.log(getName);

// var x = 7;

// function getName() {
//     console.log("hey");
// }

// var x = "Helo...";

// function b() {
//   console.log("Hey..")
//   function a() {
//   }
//   var x = "Helx...";
//   function c() {
//     a();
//     console.log(x);
//   }
//   c();
// }
// b();
// console.log(x);


// function ab() {

// }

// function fibu(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fibu(n-1) + fibu(n+1);
// }




>>>>>>> 77b2e42 (twoNav)
