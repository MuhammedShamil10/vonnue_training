0
const brandOption = document.querySelector(".brandOption")

console.log(brandOption);




let shopingCategory = [
  {
    name: "Electronics",
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
  for (let i = 0; i < shopingCategory.length; i++) {
    let firstSopping = document.createElement("span");
    firstSopping.classList.add("category");
    shoppingListEl.appendChild(firstSopping);
    firstSopping.innerHTML = shopingCategory[i].name;

    let scrollIcon = document.createElement("span");
    scrollIcon.classList.add("downImg");
    shoppingListEl.appendChild(scrollIcon);
    scrollIcon.innerHTML = shopingCategory[i].img;
  }
}
shopList();


let mobiles = [
  {
    img: `https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/e/l/d/-original-imagnhusa2upmgeq.jpeg?q=70`,
    favIcon: "Assets/img/flipFav.svg",
    compOption: "Add to Compare",
    phoneName: "APPLE iPhone 14(Yellow, 128 GB)",
    rating: 4.7,
    star: "Assets/img/star.svg",
    review: "22,308 Rating & 880 Reviews",
    price: "",
    actualPrice: 79900,
    percentage: 9,
    assuredImg: "Assets/img/azured.png",
    delivery: "Free Delivery",
    exchangeOff: "Upto",
    exchangeOffOne: "₹30,000",
    exchangeOfftwo: "Off on Exchange",
    bankOffer: "Bank Offer",
    feature: [
      {
        storage: "128 GB ROM",
        dimention: "15.49cm (6.1 inch) Super Retina XDR Display",
        camera: "12MP + 12MP | 12MP Front Camera",
        battery: "",
        processor: "A15 Bionic Chip, 6 Core Processor",
        warranty: "1 Year Warrant for Phone and 6 Month Warranty for In-Box Accessories"
      }
    ],
    brand: "Apple",
    rateBrand: 4
  },
  {
    img: `https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/l/8/r/-original-imaghxemnnnkd8bg.jpeg?q=70`,
    compOption: "Add to Compare",
    favIcon: "Assets/img/flipFav.svg",
    phoneName: "APPLE iPhone 14 Pro(Deep Purple, 128 GB)",
    rating: 4.7,
    star: "Assets/img/star.svg",
    review: "864 Rating & 71 Reviews",
    price: "",
    actualPrice: 122999,
    percentage: 5,
    delivery: "Free Delivery",
    exchangeOff: "Upto",
    exchangeOffOne: "₹30,000",
    exchangeOfftwo: "Off on Exchange",
    bankOffer: "Bank Offer",
    assuredImg: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
    feature: [
      {
        storage: "128 GB ROM",
        dimention: "15.49cm (6.1 inch) Super Retina XDR Display",
        camera: "48MP + 12MP | 12MP Front Camera",
        battery: "",
        processor: "A16 Bionic Chip, 6 Core Processor",
        warranty: "1 Year Warrant for Phone and 6 Month Warranty for In-Box Accessories"
      }
    ],
    brand: "Apple",
    rateBrand: 4
  },
  {
    img: `https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/k/1/o/-original-imagmg6gz3bsgan7.jpeg?q=70`,
    compOption: "Add to Compare",
    favIcon: "Assets/img/flipFav.svg",
    phoneName: "SAMSUNG Galaxy S23 Ultra 5G(Cream, 256 GB)",
    rating: 3.1,
    star: "Assets/img/star.svg",
    review: "22,308 Rating & 880 Reviews",
    price: "",
    actualPrice: 124999,
    percentage: 16,
    delivery: "Free Delivery",
    exchangeOff: "Upto",
    exchangeOffOne: "₹30,000",
    exchangeOfftwo: "Off on Exchange",
    bankOffer: "Bank Offer",
    assuredImg: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
    feature: [
      {
        storage: "12 GB RAM|256 GB ROM",
        dimention: "17.27cm (6.8 inch) Quad HD+ Display",
        camera: "200MP + 12MP + 12MP + 10MP | 12MP Front Camera",
        battery: "5000 mAh Lithium Ion Battery",
        processor: "Qualcomm Snapdrogon 8 Gen 2 Processor",
        warranty: "1 Year Warrant for Phone and Month Warranty for In-Box Accessories"
      }
    ],
    brand: "Samsung",
    rateBrand: 3
  },
  {
    img: `https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/c/1/h/-original-imagmg6gcjyuvzvn.jpeg?q=70`,
    compOption: "Add to Compare",
    favIcon: "Assets/img/flipFav.svg",
    phoneName: "SAMSUNG Galaxy S23 5G(Phantom Black, 256 GB)",
    rating: 3.7,
    star: "Assets/img/star.svg",
    review: "22,308 Rating & 880 Reviews",
    price: "",
    actualPrice: 94999,
    percentage: 9,
    delivery: "Free Delivery",
    exchangeOff: "Upto",
    exchangeOffOne: "₹30,000",
    exchangeOfftwo: "Off on Exchange",
    bankOffer: "Bank Offer",
    assuredImg: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
    feature: [
      {
        storage: "8 GB RAM | 256 GB ROM",
        dimention: "15.49cm (6.1 inch) Full  HD+ Display",
        camera: "50MP + 10MP + 12MP | 12MP Front Camera",
        battery: "3900 mAh Lithium Ion Battery",
        processor: "Qualcomm Snapdrogon 8 Gen 2 Processor",
        warranty: "1 Year Warrant for Phone and Month Warranty for In-Box Accessories"
      }
    ],
    brand: "Samsung",
    rateBrand: 3
  },
  {
    img: `https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70`,
    compOption: "Add to Compare",
    favIcon: "Assets/img/flipFav.svg",
    phoneName: "APPLE iPhone 13(Blue, 128 GB)",
    rating: 4.7,
    star: "Assets/img/star.svg",
    review: "1,96,141 Rating & 10,721 Reviews",
    price: "",
    actualPrice: 69900,
    percentage: 9,
    delivery: "Free Delivery",
    exchangeOff: "Upto",
    exchangeOffOne: "₹30,000",
    exchangeOfftwo: "Off on Exchange",
    bankOffer: "Bank Offer",
    assuredImg: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
    feature: [
      {
        storage: "128 GB ROM",
        dimention: "15.49cm (6.1 inch) Super Retina XDR Display",
        camera: "12MP + 12MP | 12MP Front Camera",
        battery: "",
        processor: "A15 Bionic Chip, 6 Core Processor",
        warranty: "Brand Warranty for 1 Year"
      }
    ],
    brand: "Apple",
    rateBrand: 4
  },
  {
    img: `https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/p/h/p/-original-imagfggryyzyvhgw.jpeg?q=70`,
    compOption: "Add to Compare",
    favIcon: "Assets/img/flipFav.svg",
    phoneName: "realme C35(Glowing black, 64 GB)",
    rating: 4.4,
    star: "Assets/img/star.svg",
    review: "1,74,850 Rating & 9,939 Reviews",
    price: "",
    actualPrice: 13999,
    percentage: 21,
    delivery: "Free Delivery",
    exchangeOff: "Upto",
    exchangeOffOne: "₹30,000",
    exchangeOfftwo: "Off on Exchange",
    bankOffer: "Bank Offer",
    assuredImg: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
    feature: [
      {
        storage: "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB",
        dimention: "16.76cm (6.6 inch) Full HD+ Display",
        camera: "50MP + 2MP 0.3MP | 8MP Front Camera",
        battery: "5000 mAh Lithium Polmer Battery",
        processor: "Unisoc Tiger T616 Processor",
        warranty: "1 Year Warrant for Phone and 6 Month Warranty for In-Box Accessories"
      }
    ],
    brand: "Realme",
    rateBrand: 4
  },
  {
    img: `https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/y/9/g/-original-imagnfzyhh8gz8sd.jpeg?q=70`,
    compOption: "Add to Compare",
    favIcon: "Assets/img/flipFav.svg",
    phoneName: "POCO M4 5G(Yellow, 128 GB)",
    rating: 4.2,
    star: "Assets/img/star.svg",
    review: "29,519 Rating & 2,248 Reviews",
    price: "",
    actualPrice: 13999,
    percentage: 21,
    delivery: "Free Delivery",
    exchangeOff: "Upto",
    exchangeOffOne: "₹30,000",
    exchangeOfftwo: "Off on Exchange",
    bankOffer: "Bank Offer",
    assuredImg: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
    feature: [
      {
        storage: "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
        dimention: "17.04cm (6.71 inch) HD+ Display",
        camera: "50PM Rear Camera | 5MP Front Camera",
        battery: "5000 mAh Battery",
        processor: "Mediatek Helio G85 Processor",
        warranty: "1 Year Warrant for Phone and 6 Month Warranty for In-Box Accessories"
      }
    ],
    brand: "Realme",
    rateBrand: 3
  },
  {
    img: `https://rukminim1.flixcart.com/image/312/312/l2jcccw0/mobile/i/1/y/-original-imagdu8gtefvchbn.jpeg?q=70`,
    compOption: "Add to Compare",
    favIcon: "Assets/img/flipFav.svg",
    phoneName: "POCO M4 5G(Yellow, 128 GB)",
    rating: 4.2,
    star: "Assets/img/star.svg",
    review: "29,519 Rating & 2,248 Reviews",
    price: "",
    actualPrice: 18999,
    percentage: 26,
    delivery: "Free Delivery",
    exchangeOff: "Upto",
    exchangeOffOne: "₹30,000",
    exchangeOfftwo: "Off on Exchange",
    bankOffer: "Bank Offer",
    assuredImg: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
    feature: [
      {
        storage: "6 GB RAM | 128 GB ROM | Expandable Upto 512 GB",
        dimention: "16.71cm (6.58 inch) Full HD+ Display",
        camera: "50MP + 2MP | 12MP Front Camera",
        battery: "5000 mAh Lithium Ion Battery",
        processor: "Mediatek Dimensity 700 Processor",
        warranty: "1 Year Warrant for Phone and Month Warranty for In-Box Accessories"
      }
    ],
    brand: "Realme",
    rateBrand: 4
  },
  {
    img: `https://rukminim1.flixcart.com/image/312/312/kzhbfrk0/mobile/0/r/j/-original-imagbgxffuvx56mm.jpeg?q=70`,
    compOption: "Add to Compare",
    favIcon: "Assets/img/flipFav.svg",
    phoneName: "OPPO Reno Pro 5G(Starlight black, 256 GB)",
    rating: 4.3,
    star: "Assets/img/star.svg",
    review: "8,269 Rating & 1089 Reviews",
    price: "",
    actualPrice: 47990,
    percentage: 27,
    delivery: "Free Delivery",
    exchangeOff: "Upto",
    exchangeOffOne: "₹30,000",
    exchangeOfftwo: "Off on Exchange",
    bankOffer: "Bank Offer",
    assuredImg: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
    feature: [
      {
        storage: "12 GB RAM | 256 GB ROM",
        dimention: "16.51 cm (6.5 inch) Full HD+ AMOLED Display",
        camera: "50MP + 8MP + 2MP | 32MP Front Camera",
        battery: "4500 mAh Lithium-ion Polymer Battery",
        processor: "MediaTek Dimensity 1200-Max Processor",
        warranty: "1 Year Warrant for Phone and Month Warranty for In-Box Accessories"
      }
    ],
    brand: "Oppo",
    rateBrand: 4

  },
  {
    img: `https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/d/u/7/-original-imagmgy5ywvzdv6g.jpeg?q=70`,
    compOption: "Add to Compare",
    favIcon: "Assets/img/flipFav.svg",
    phoneName: "ASUS ROG 5s(Phantom Black, 256 GB",
    rating: 4.2,
    star: "Assets/img/star.svg",
    review: "703 Rating & 86 Reviews",
    price: "",
    actualPrice: 63999,
    percentage: 25,
    delivery: "Free Delivery",
    exchangeOff: "Upto",
    exchangeOffOne: "₹30,000",
    exchangeOfftwo: "Off on Exchange",
    bankOffer: "Bank Offer",
    assuredImg: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
    feature: [
      {
        storage: "12 GB RAM | 256 GB ROM",
        dimention: "17.22cm (6.78 inch) Full HD+ Display",
        camera: "64MP + 13MP 5MP | 24PM Front Camera",
        battery: "",
        processor: "Qualcomm Snapdragon 888 Plus Processor",
        warranty: "1 Year Brand warranty"

      }
    ],
    brand: "Oppo",
    rateBrand: 4
  }
]

let mobileContainerEl = document.getElementById("products-el");

let newitem = [...mobiles]
brandCategory(mobiles);



function update() {
  mobileContainerEl.innerHTML = "";
}

function brandCategory(mobiles) {
  // console.log(mobiles);
  for (let i = 0; i < mobiles.length; i++) {
    let brandName = document.createElement("div");
    brandName.classList.add("product-container");
    mobileContainerEl.appendChild(brandName);

    let imgContainer = document.createElement("div");
    brandName.appendChild(imgContainer);
    imgContainer.classList.add("imgSection");
    let mobileImg = document.createElement("span");
    imgContainer.appendChild(mobileImg);
    let phoneImg = document.createElement("img");
    mobileImg.appendChild(phoneImg);
    phoneImg.src = mobiles[i].img;

    let compareOption = document.createElement("span");
    compareOption.classList.add("addCompare")
    imgContainer.appendChild(compareOption);
    compareOption.innerHTML = `<input type ="checkbox"> <label>${mobiles[i].compOption}`

    let mobileContainer = document.createElement("div");
    brandName.appendChild(mobileContainer);
    mobileContainer.classList.add("mobImgSection");
    let productImg = document.createElement("span");
    productImg.classList.add("mobileImg");
    mobileContainer.appendChild(productImg);
    let favIcons = document.createElement("img");
    productImg.appendChild(favIcons);
    favIcons.src = mobiles[i].favIcon;

    let productContainer = document.createElement("div");
    brandName.appendChild(productContainer);
    productContainer.classList.add("prodNameSection");
    let productName = document.createElement("span");
    productName.classList.add("productName");
    productContainer.appendChild(productName);
    productName.innerHTML = mobiles[i].phoneName;

    let rateAndOffer = document.createElement("div");
    brandName.appendChild(rateAndOffer);
    rateAndOffer.classList.add("rateAndOffer");

    let rateStar = document.createElement("div");
    rateAndOffer.appendChild(rateStar);
    rateStar.classList.add("ratingStar");
    let productRating = document.createElement("span");
    productRating.classList.add("productRating");
    rateStar.appendChild(productRating);
    productRating.innerHTML = mobiles[i].rating;

    let starone = document.createElement("img");
    rateStar.appendChild(starone);
    starone.src = mobiles[i].star;


    let offersDrop = document.createElement("div");
    rateAndOffer.appendChild(offersDrop);
    offersDrop.classList.add("offers");
    let productReview = document.createElement("span");
    offersDrop.appendChild(productReview);
    productReview.innerHTML = mobiles[i].review;

    let priceDvshion = document.createElement("div");
    brandName.appendChild(priceDvshion);
    priceDvshion.classList.add("priceSection");


    let productPrice = document.createElement("span");
    productPrice.classList.add("productPrice");
    priceDvshion.appendChild(productPrice);
    productPrice.innerHTML = mobiles[i].price;

    if (mobiles[i].price != "") {
      let totalPrice = document.createElement("div");
      totalPrice.classList.add("totalPrice");
      priceDvshion.appendChild(totalPrice);


      let tPrice = document.createElement("span");

      totalPrice.appendChild(tPrice);
      totalPrice.innerHTML = mobiles[i].price;
    } else {
      let prices = Math.floor((mobiles[i].actualPrice * 100) / (100 + mobiles[i].percentage));
      console.log(prices)

      let totalPrice = document.createElement("div");
      totalPrice.classList.add("totalPrice");
      priceDvshion.appendChild(totalPrice);

      let tPrice = document.createElement("span");
      totalPrice.appendChild(tPrice);
      totalPrice.innerHTML = "₹" + prices;

      let assuredImage = document.createElement("img");
      assuredImage.classList.add("assuredImg");
      totalPrice.appendChild(assuredImage);
      assuredImage.src = mobiles[i].assuredImg;
    }


    let productAprice = document.createElement("span");
    productAprice.classList.add("productAPrice");
    priceDvshion.appendChild(productAprice);
    productAprice.innerHTML = mobiles[i].actualPrice + " ";

    let productPercentage = document.createElement("span");
    productPercentage.classList.add("productPercentage");
    priceDvshion.appendChild(productPercentage);
    productPercentage.innerHTML = mobiles[i].percentage + "%";

    let exchangeOffer = document.createElement("div");
    exchangeOffer.classList.add("exchangeOff");
    priceDvshion.appendChild(exchangeOffer);

    let deliveryEl = document.createElement("span");
    deliveryEl.classList.add("freeDelivery");
    exchangeOffer.append(deliveryEl);
    deliveryEl.innerHTML = mobiles[i].delivery;

    let fullOffer = document.createElement("div");
    fullOffer.classList.add("totalOffer");
    exchangeOffer.appendChild(fullOffer);

    let exOffEl = document.createElement("span");
    exOffEl.classList.add("exchangeOff");
    fullOffer.append(exOffEl);
    exOffEl.innerHTML = mobiles[i].exchangeOff;

    let exOffOne = document.createElement("span");
    exOffOne.classList.add("exchangeOffOne");
    fullOffer.append(exOffOne);
    exOffOne.innerHTML = mobiles[i].exchangeOffOne;

    let exchangOfferTwo = document.createElement("span");
    exchangOfferTwo.classList.add("exchangeOffTwo");
    fullOffer.append(exchangOfferTwo);
    exchangOfferTwo.innerHTML = mobiles[i].exchangeOfftwo;

    let bankOffers = document.createElement("span");
    bankOffers.classList.add("bankOffer");
    exchangeOffer.append(bankOffers);
    bankOffers.innerHTML = mobiles[i].bankOffer;


    let productBox = document.querySelectorAll(".product-container");


    function productNameHover() {
      productBox[i].addEventListener("mouseover", () => {
        document.querySelector(".productName").setAttribute("style", "color:#2874f0;");
      });
      productBox[i].addEventListener("mouseleave", () => {
        document.querySelector(".productName").setAttribute("style", "color:#212121;");
      });
    }
    productNameHover();


    for (let s = 0; s < mobiles[i].feature.length; s++) {
      let productFeature = document.createElement("div");
      productFeature.classList.add("productFeatures")
      brandName.appendChild(productFeature);
      if (mobiles[i].feature[s].battery === "") {

        productFeature.innerHTML = `<ul>
                               <li>${mobiles[i].feature[s].storage}</li>
                               <li>${mobiles[i].feature[s].dimention}</li>
                               <li>${mobiles[i].feature[s].camera}</li>
                               <li>${mobiles[i].feature[s].processor}</li>
                               <li>${mobiles[i].feature[s].warranty}</li>
                               </ul>`
      } else {
        productFeature.innerHTML = `<ul>
      <li>${mobiles[i].feature[s].dimention}</li>
      <li>${mobiles[i].feature[s].camera}</li>
      <li>${mobiles[i].feature[s].battery}</li>
      <li>${mobiles[i].feature[s].processor}</li>
      <li>${mobiles[i].feature[s].warranty}</li>
      </ul>`
      }
    }

  }
}









function filtering(data) {
  let mobileFilters = [];
  let productRating = [];



  let appleEl = document.getElementById("apple-el");
  let samsungEl = document.getElementById("samsung-el");
  let pocoEl = document.getElementById("poco-el");
  let oppoEl = document.getElementById("oppo-el");

  if (appleEl.checked === true) {
    mobileFilters.push("Apple");
    console.log(mobileFilters);
  }
  if (samsungEl.checked === true) {
    mobileFilters.push("Samsung");
  }
  if (pocoEl.checked === true) {
    mobileFilters.push("Realme")
  }
  if (oppoEl.checked === true) {
    mobileFilters.push("Oppo")
  }

  let fourStar = document.getElementById("fourStar-el");
  let threeStar = document.getElementById("threeStar-el");

  if (fourStar.checked === true) {
    productRating.push(4);
  }
  if (threeStar.checked === true) {
    productRating.push(3);
  }

  if (mobileFilters.length) {
    item = mobileFilter(data, mobileFilters)
    console.log(item);
    update();

    brandCategory(item);
  }
  if (productRating.length) {
    item = ratingFilter(data, productRating);
    console.log(item);
    update();
    brandCategory(item);
  }
}

function setupFilter(mobileClick) {
  let appleEl = document.getElementById("apple-el");
  let samsungEl = document.getElementById("samsung-el");
  let pocoEl = document.getElementById("poco-el");
  let oppoEl = document.getElementById("oppo-el");

  appleEl.addEventListener("change", () => {
    filtering(mobileClick);
  });
  samsungEl.addEventListener("change", () => {
    filtering(mobileClick);
  });
  pocoEl.addEventListener("change", () => {
    filtering(mobileClick);
  });
  oppoEl.addEventListener("change", () => {
    filtering(mobileClick);
  });

  let fourStar = document.getElementById("fourStar-el");
  let threeStar = document.getElementById("threeStar-el");
  fourStar.addEventListener("change", () => {
    filtering(mobileClick);
  });
  threeStar.addEventListener("change", () => {
    filtering(mobileClick);
  });

}
setupFilter(newitem);

function mobileFilter(mobiles, arrayoffindingphones) {

  return mobiles.filter((item) => {
    return arrayoffindingphones.includes(item.brand);

  });

}
function ratingFilter(mobiles, arrayOffRating) {
  return mobiles.filter((item) => {
    return arrayOffRating.includes(item.rateBrand);
  });
}

























// console.log(mobileFilter)
// namaste javascript....:-

// const arr = [123,15,5,6345,234];

// const output = arr.filter((x) => x % 2);
// console.log(output);

// function a() {
//   console.log(b);
// }
// var b = 10;
// a();
// console.log(a);

// let a = 109; 
// var b = 100;

// function ab(){
//   return function oi() {
//     console.log("Sample..."); 
//   }
// }
// let l = ab();
// console.log(l);
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


// const radius = [2, 4, 6, 7];

// const calArea = function (radius) {
//   const output = []
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// }
// console.log(calArea(radius));



// const arr = [1, 2, 3, 4, 5];

// const output = arr.map(function double (x) {
//   return x * 2;
//  });

// const output2 = arr.map(function thriple (x) {
//   return x * 3;
// })

// console.log(output);
// console.log(output2);

//  function isOdd(x) {
//   return x % 2;
//  }
//  const output = arr.filter(isOdd);
//  console.log(output);

// const anOutput = arr.reduce(function(acc ,curr) {

// });

// const output2 = arr.map(function thriple (x) {
//   return x * 3;
// })

// console.log(output);
// console.log(output2);

// const output2 = arr.map(function thriple (x) {
//   return x * 3;
// })

// console.lrrgog(output);
// console.log(output2);

//  function isOdd(x) {
//   return x % 2;  }
//  const output = arr.filter(isOdd);
//   console.log(output);

// const anOutput = arr.reduce(function(acc ,curr) {

//  });z
//   gioisOdd(x) {
//    return x % 2;
//   }
//   const output = arr.filter(isOdd);
//   console.log(output);

//  const anOutput = arr.reduce(function(acc ,curr) {
//  });

// var obj = {
//   a: 1,
//   b: 2,
//   c: "oka"
// }

// var objs = {
//   ...obj
// }

// console.log(objs);




