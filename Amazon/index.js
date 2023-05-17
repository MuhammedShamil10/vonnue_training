// import/7t { value } from "./index2";

categoriesTwo = [
  {
    mobile: "Mobiles & Accessories",
    // electric: `https://m.media-amazon.com/images/G/31/img18/Electronics/Megamenu/Megamenu_Electronics_top._CB485947327_.png`,
    laptop: "Laptop & Accessories",
    tv: "TV & Home Entertainment",
    audio: "Audio",
    camera: "Cameras",
    computer: "Computer Peripherals",
    technology: "Smart Technology",
    instruments: "Musical Instruments",
    officeAndSta: "Office & Stationery",
  },
];
let categoryEl = document.getElementById("category-el");

let navBottom = categoriesTwo.map(function (item) {
  let html = `
                <span><img class="electro-img" src="/Amazon/Assets/Img/Electronics_.png" alt="" width="100px"></span>
                <span>${item.mobile}</span>
                <span>${item.laptop}</span>
                <span>${item.tv}</span>
                <span>${item.audio}</span>
                <span>${item.camera}</span>
                <span>${item.computer}</span>
                <span>${item.technology}</span>
                <span>${item.instruments}</span>
                <span>${item.officeAndSta}</span>
           `;
  return html;
});
categoryEl.innerHTML = navBottom;

allProduct = [
  {
    bestProduct: "",
    productImage: `https://m.media-amazon.com/images/I/61WAINtWPPL._AC_UL400_.jpg`,
    mobileModel: "Apple iPhone 14(128 GB) - Yellow",
    starRate: `/Amazon/Assets/Img/four&halfStar.png`,
    angleDown: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,
    reviewCount: "532",
    dealOption: "",
    originalRate: "",
    priceOffer: "11",
    originalPrice: "79900",
    bankOffer: "Flat INR 4000 Off on HDFC BankCards",
    primeEdition: "/Amazon/Assets/Img/primeicon.png",
    deliveryText: "Get it by",
    deliveryDate: "Thursday, 4 May",
    deliveryOption: "FREE Delivery by Amazon",
    brand: "apple",
    star: 4,
    price: 21000,
  },
  {
    bestProduct: "Best Seller",
    productImage: `https://m.media-amazon.com/images/I/61vtLhO6fDL._AC_UL400_.jpg`,
    mobileModel: "Apple 20W USB-C Power Adapter (for iPhone,iPad & AirPods",
    starRate: `/Amazon/Assets/Img/four&halfStar.png`,
    angleDown: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,
    reviewCount: "65,114",
    dealOption: "",
    originalRate: "",
    originalPrice: "1900",
    priceOffer: 10,
    bankOffer: "",
    primeEdition: "/Amazon/Assets/Img/primeicon.png",
    deliveryText: "Get it by",
    deliveryDate: "Thursday, 4 May",
    deliveryOption: "FREE Delivery by Amazon",
    brand: "apple",
    star: 4,
    price: 2000,
  },
  {
    bestProduct: "",
    productImage: `https://m.media-amazon.com/images/I/71AvQd3VzqL._AC_UL400_.jpg`,
    mobileModel: "OnePlus Nord CE 2 Lite 5G(Blue Tide,6GB RAM, 128GB Storage)",
    starRate: `/Amazon/Assets/Img/three4Star.png`,
    angleDown: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,
    reviewCount: "65,114",
    dealOption: "Kickstarter Deal",
    originalRate: "",
    originalPrice: "19999",
    priceOffer: 10,
    bankOffer: "",
    primeEdition: "/Amazon/Assets/Img/primeicon.png",
    deliveryText: "Get it by",
    deliveryDate: "Thursday, 4 May",
    deliveryOption: "FREE Delivery by Amazon",
    brand: "oneplus",
    star: 3,
    price: 19000,
  },
  {
    bestProduct: "",
    productImage: `https://m.media-amazon.com/images/I/91Rh8F1g3kL._AC_UL400_.jpg`,
    mobileModel:
      "Apple MagSafe Charger (for iPhone, AirPods Pro, AirPods with Wireless Charging Case)",
    starRate: `/Amazon/Assets/Img/four&halfStar.png`,
    angleDown: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,
    reviewCount: "82,218",
    dealOption: "",
    originalRate: "",
    originalPrice: "900",
    priceOffer: 10,
    bankOffer: "",
    primeEdition: "/Amazon/Assets/Img/primeicon.png",
    deliveryText: "Get it by",
    deliveryDate: "Thursday, 4 May",
    deliveryOption: "FREE Delivery by Amazon",
    brand: "apple",
    star: 4,
    price: 900,
  },
  {
    bestProduct: "",
    productImage: `https://m.media-amazon.com/images/I/618Bb+QzCmL._AC_UL400_.jpg`,
    mobileModel: "Apple iPhone 14(128 GB) - Starlight",
    starRate: `/Amazon/Assets/Img/four&halfStar.png`,
    angleDown: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,
    reviewCount: "534",
    dealOption: "",
    originalRate: "",
    originalPrice: "65000",
    priceOffer: 10,
    bankOffer: "Flat INR 4000 Off on HDFC BankCards",
    primeEdition: "/Amazon/Assets/Img/primeicon.png",
    deliveryText: "Get it by",
    deliveryDate: "Thursday, 4 May",
    deliveryOption: "FREE Delivery by Amazon",
    brand: "apple",
    star: 4,
    price: 21000,
  },
  {
    bestProduct: "Best Seller",
    productImage: `https://m.media-amazon.com/images/I/71ZyBh4LQuL._AC_UL400_.jpg`,
    mobileModel:
      "Apple Watch SE(GPS + Cellular,44mm)-Space Grey Aluminimum Case with Midnight Sport Brand - Regular",
    starRate: `/Amazon/Assets/Img/four&halfStar.png`,
    angleDown: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,
    reviewCount: "1,057",
    dealOption: "Kickstarter Deal",
    originalRate: "",
    originalPrice: "36900",
    priceOffer: 10,
    bankOffer: "",
    primeEdition: "/Amazon/Assets/Img/primeicon.png",
    deliveryText: "Get it by",
    deliveryDate: "Thursday, 4 May",
    deliveryOption: "FREE Delivery by Amazon",
    brand: "apple",
    star: 4,
  },
  {
    bestProduct: "",
    productImage: `https://m.media-amazon.com/images/I/613SAOPmLeL._AC_UL400_.jpg`,
    mobileModel: "OnePlus 11R 5G (Galactic Silver, 16GB RAM,256GB Storage)",
    starRate: `/Amazon/Assets/Img/four&halfStar.png`,
    angleDown: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,
    reviewCount: "1,057",
    dealOption: "Kickstarter Deal",
    originalRate: "",
    originalPrice: "36900",
    priceOffer: 10,
    bankOffer: "",
    primeEdition: "/Amazon/Assets/Img/primeicon.png",
    deliveryText: "Get it by",
    deliveryDate: "Thursday, 4 May",
    deliveryOption: "FREE Delivery by Amazon",
    brand: "oneplus",
    star: 4,
    price: 21000,
  },
  {
    bestProduct: "",
    productImage: `https://m.media-amazon.com/images/I/510+3Km7MtL._AC_UL400_.jpg`,
    mobileModel:
      "OnePlus Nord Watch with 1.78” AMOLED Display, 60 Hz Refresh Rate, 105 Fitness Modes, 10 Days Battery, SPO2, Heart Rate, Stress Monitor, Women Health Tracker & Multiple Watch Face [Midnight Black]",
    starRate: `/Amazon/Assets/Img/two$HalfStar.png`,
    angleDown: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,
    reviewCount: "1,612",
    dealOption: "Kickstarter Deal",
    originalRate: "",
    originalPrice: "6999",
    priceOffer: 43,
    bankOffer: "",
    primeEdition: "/Amazon/Assets/Img/primeicon.png",
    deliveryText: "Get it by",
    deliveryDate: "Thursday, 4 May",
    deliveryOption: "FREE Delivery by Amazon",
    brand: "oneplus",
    star: 2,
    price: 6700,
  },
  {
    bestProduct: "",
    productImage: `https://m.media-amazon.com/images/I/71BoiXkrEmL._AC_UL400_.jpg`,
    mobileModel:
      "OnePlus 10R 5G (Sierra Black,8GB RAM, 128GB Storage,80W SuperVOOC)",
    starRate: `/Amazon/Assets/Img/four&halfStar.png`,
    angleDown: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,
    reviewCount: "13,823",
    dealOption: "Kickstarter Deal",
    originalRate: "",
    originalPrice: "38999",
    priceOffer: 21,
    bankOffer: "",
    primeEdition: "/Amazon/Assets/Img/primeicon.png",
    deliveryText: "Get it by",
    deliveryDate: "Thursday, 4 May",
    deliveryOption: "FREE Delivery by Amazon",
    brand: "oneplus",
    star: 4,
    price: 21000,
  },
  {
    bestProduct: "",
    productImage: `https://m.media-amazon.com/images/I/91zMokvCNuL._AC_UL400_.jpg`,
    mobileModel:
      "Samsung Galaxy M14 5G (Smoky Teal, 6GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery | 5nm Octa-Core Processor | 12GB RAM with RAM Plus | Android 13 | Without Charger",
    starRate: `/Amazon/Assets/Img/two$HalfStar.png`,
    angleDown: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,
    reviewCount: "29",
    dealOption: "",
    originalRate: "",
    originalPrice: "18999",
    priceOffer: 21,
    bankOffer: "Flat INR 750 Off on ICIC BankCards",
    primeEdition: "/Amazon/Assets/Img/primeicon.png",
    deliveryText: "Get it by",
    deliveryDate: "Thursday, 4 May",
    deliveryOption: "FREE Delivery by Amazon",
    brand: "samsung",
    star: 2,
    price: 19000,
  },
  {
    bestProduct: "Best Seller",
    productImage: `https://m.media-amazon.com/images/I/61G5JoU9tTL._AC_UL400_.jpg`,
    mobileModel:
      "Samsung Galaxy Buds Live Bluetooth Truly Wireless in Ear Earbuds with Mic, Upto 21 Hours Playtime, Mystic Black",
    starRate: `/Amazon/Assets/Img/fourStar.png`,
    angleDown: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,
    reviewCount: "6,256",
    dealOption: "Kickstarter Deal",
    originalRate: "",
    originalPrice: "15990",
    priceOffer: 30,
    bankOffer: "Flat INR 750 Off on ICIC BankCards",
    primeEdition: "/Amazon/Assets/Img/primeicon.png",
    deliveryText: "Get it by",
    deliveryDate: "Thursday, 4 May",
    deliveryOption: "FREE Delivery by Amazon",
    brand: "samsung",
    star: 4,
    price: 15000,
  },
  {
    bestProduct: "Best Seller",
    productImage: `https://m.media-amazon.com/images/I/21uXmiH98wL._AC_UL400_.jpg`,
    mobileModel: "Samsung 25W USB Travel Adapter for Cellular Phones - White",
    starRate: `/Amazon/Assets/Img/four&halfStar.png`,
    angleDown: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,
    reviewCount: "11,388",
    dealOption: "",
    originalRate: "",
    originalPrice: "1699",
    priceOffer: 75,
    bankOffer: "",
    primeEdition: "/Amazon/Assets/Img/primeicon.png",
    deliveryText: "Get it by",
    deliveryDate: "Thursday, 4 May",
    deliveryOption: "FREE Delivery by Amazon",
    brand: "samsung",
    star: 4,
    price: 1000,
  },
];

let productEl = document.getElementById("products-cr");

let newItem = [...allProduct];

function update() {
  productEl.innerHTML = "";
}

let mainRight = (product) =>
  product.map(function (items) {
    htmltwo = `<div id="product-container">
    <div class="box-container">
    
   ${callingBestOption(items.bestProduct)}
    <div class="imgSection">
        <img src="${items.productImage}" alt="">
    </div>
    <div class="productDeteils">
        <div class="model-name">
            <span>${items.mobileModel} </span>
        </div>
        <div class="ratingSection">
            <img src="${items.starRate}" alt="">
            <span class ="angleDown">${items.angleDown}</span>
            <span class="reviewCount">${items.reviewCount}</span>
        </div>
        <div class="dealsOption">
         ${callingDealsOption(items.dealOption)}
        </div>
        <div class="priceSection">
        <div class = "priceCombain"> 
        <span class ="priceSymbol">₹</span>
        <div class = "priceFix"> 
            <span class ="priceShow">${priceCalculating(
              items.originalPrice,
              items.priceOffer
            )}</span>
            <span class ="ogPrice">₹${items.originalPrice}</span>
            </div>
        </div>
        </div>
        <div class="bankOffer">
            <span><img src="${items.primeEdition}" alt=""></span>
            <span class ="deliveryOne">${items.deliveryText}</span>
            <span class ="deliveryTwo">${items.deliveryDate}</span>
        </div>
        <div class="deliverOptions">
            <span>${items.deliveryOption}</span>
        </div>
    </div>
</div>
</div>`;
    return htmltwo;
  });
productEl.innerHTML = mainRight(allProduct).join("");
mainRight(allProduct);

function filtering(data) {
  let brandFilter = [];

  // checkBox Filter
  const onePlusEl = document.getElementById("onePlus");
  const appleEl = document.getElementById("apple");
  const samsungEl = document.getElementById("samsung");

  if (onePlusEl.checked === true) {
    brandFilter.push("oneplus");
    console.log("oneplus checked");
  }
  if (appleEl.checked === true) {
    brandFilter.push("apple");
    console.log(appleEl, "checking");
  }
  if (samsungEl.checked === true) {
    brandFilter.push("samsung");
  }

  if (brandFilter.length) {
    data = productBrandFilter(data, brandFilter);
    console.log(data, "brandFilter");
    update();
    productEl.innerHTML = mainRight(data);
  } else {
    update();
    productEl.innerHTML = mainRight(allProduct);
  }
}
function setupFilter(mobileClick) {
  const onePlusEL = document.getElementById("onePlus");
  const appleEl = document.getElementById("apple");
  const samsungEl = document.getElementById("samsung");

  onePlusEL.addEventListener("change", () => {
    filtering(mobileClick);
    console.log("clicked");
  });
  appleEl.addEventListener("change", () => {
    filtering(mobileClick);
  });
  samsungEl.addEventListener("change", () => {
    filtering(mobileClick);
  });

  // starFiltering
  let spanClear = true;

  let fourStarEl = document.querySelectorAll(".fourStar-rating");
  let clickVariable = [];
  fourStarEl.forEach((element, index) => {
    element.addEventListener("click", () => {
      console.log("clicked");
      update();

      if (index == 0) {
        clickVariable = [4];
      }
      if (index == 1) {
        clickVariable = [3, 4];
      }
      if (index == 2) {
        clickVariable = [2, 3, 4];
      }
      if (index == 3) {
        clickVariable = [1, 2, 3, 4];
      }
      // let arry = productStarFilter(allProduct, clickVariable)
      let array = allProduct.filter((item) => {
        return clickVariable.includes(item.star);
      });

      // let fourFilter = allProduct.filter((items) => {
      //     return items.star == 4
      // })
      // console.log(fourFilter);
      productEl.innerHTML = mainRight(array);
      let reviewEl = document.getElementById("reviewRate");
      let newSpan = document.createElement("span");
      reviewEl.addEventListener("click", () => {
        console.log(spanClear);
        if (spanClear) {
          spanClear = false;

          // newSpan.classList.add("clk-option");
          // reviewEl.appendChild(newSpan);
          // newSpan.innerHTML = "Clear";
        }
      });
      newSpan.addEventListener("click", () => {
        console.log("clickedSpan");
        update();
        newSpan.innerHTML = mainRight(allProduct);
      });
    });
  });

  let firstPrice = document.getElementById("leastPrice-el");
  firstPrice.addEventListener("click", () => {
    let priceTag = allProduct.filter((item) => {
      return item.price <= 1000;
    });
    productEl.innerHTML = mainRight(priceTag);
  });

  let secondPrice = document.getElementById("midPrice-el");
  secondPrice.addEventListener("click", () => {
    let sPriceTag = allProduct.filter((item) => {
      return item.price < 5000 && item.price > 1000;
    });
    productEl.innerHTML = mainRight(sPriceTag);
  });

  let thirdPrice = document.getElementById("highPrice-el");
  thirdPrice.addEventListener("click", () => {
    let tPriceTage = allProduct.filter((item) => {
      return item.price < 10000 && item.price > 5000;
    });
    productEl.innerHTML = mainRight(tPriceTage);
  });
  let bigPrice = document.getElementById("bigPrice-el");
  bigPrice.addEventListener("click", () => {
    let bPriceTag = allProduct.filter((item) => {
      return item.price > 11000;
    });
    productEl.innerHTML = mainRight(bPriceTag);
  });
}

function priceCalculating(originalPrice, priceOffer) {
  let offer = Math.floor((+originalPrice * 100) / (100 + +priceOffer));
  return offer.toLocaleString();
}
+priceCalculating(+allProduct.originalPrice, +allProduct.priceOffer);

function callingDealsOption(item) {
  if (item != "") {
    return `<span class="dealsName">${item}</span>`;
  } else {
    return "";
  }
}
function callingBestOption(item) {
  if (item != "") {
    return `
    <div class = "optionContainer">
    <span class ="bestOption">
    ${item}</span>
    </div>`;
  } else {
    return "";
  }
}

setupFilter(newItem);
function productBrandFilter(mobiles, arrayOfFindingPhone) {
  console.log(arrayOfFindingPhone, "ayyoffindphne");
  console.log(mobiles, "mobilefindg");
  return mobiles.filter((item) => {
    return arrayOfFindingPhone.includes(item.brand);
  });
}
function productStarFilter(mobiles, finding) {
  console.log(mobiles, "findngs", finding);
  return mobiles.filter((item) => {
    return finding.includes(item.star);
  });
}
