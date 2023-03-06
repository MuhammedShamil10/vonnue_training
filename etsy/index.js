let list = document.getElementById("list-el");
// let listUl = document.querySelector(".ul-el")


let listUl = document.createElement("ul");
listUl.classList.add("list-ul");
list.appendChild(listUl);

let imgRow = document.getElementById("img-row");
let imgRowUl = document.createElement("ul");
imgRowUl.classList.add("img-ul");
imgRow.appendChild(imgRowUl);



let lists = [
    {
        name: "Sellers sales Hub",
        img: ""
    },
    {
        name: "Jewellery & Accessories",
        img: "",
    },
    {
        name: "Clothing & Shoes",
        img: "",
    },
    {
        name: "Home & Living",
        img: "",
    },
    {
        name: "Wedding & Party",
        img: "",
    },
    {
        name: "Toys & Entertainment",
        img: "",
    },
    {
        name: "Art & Collectibles",
        img: "",
    },
    {
        name: "Craft Supplies",
        img: "",
    },
    {
        name: "Gifts",
        img: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 5 22 12" width="16" height="12" aria-hidden="true" focusable="false"><path d="M5,6A1,1,0,0,0,4,7v3H5v9a1,1,0,0,0,1,1h5V6H5Z"></path><path d="M19,6H13.007A4.245,4.245,0,0,0,14.97,3.744a1.614,1.614,0,0,0-2.65-1.375,1.757,1.757,0,0,0-.315.324,1.753,1.753,0,0,0-.315-0.324A1.615,1.615,0,0,0,9.042,3.746,4.257,4.257,0,0,0,11.006,6H13V20h5a1,1,0,0,0,1-1V10h1V7A1,1,0,0,0,19,6Z"></path></svg>`,
    }
]

function ListUlAdd() {
    for (let i = 0; i < lists.length; i++) {
        let newList = document.createElement("li");
        newList.classList.add("list-items");
        listUl.append(newList);
        if (lists[i].img === "") {
            newList.innerHTML = `${lists[i].name}`
        } else {
            newList.innerHTML = `${lists[i].img}${lists[i].name}`;
        }
    }
}

ListUlAdd();

let imgCount = [{
    imgPath: `https://i.etsystatic.com/17600118/c/1498/1498/0/0/il/4f37ae/2328685610/il_300x300.2328685610_basr.jpg`,
    imgName: "Wedding"
},
{
    imgPath: `https://i.etsystatic.com/18077312/r/il/b10e09/2350226444/il_300x300.2350226444_odar.jpg`,
    imgName: "Jewellery"
},
{
    imgPath: `https://i.etsystatic.com/32501528/c/1518/1518/253/562/il/4bdfa0/3702738409/il_300x300.3702738409_qfmi.jpg`,
    imgName: "Clothing"
},
{
    imgPath: `https://i.etsystatic.com/16676438/c/2002/2002/449/0/il/89ea5d/1467855817/il_300x300.1467855817_ksv4.jpg`,
    imgName: "Home & Living"
},
{
    imgPath: `https://i.etsystatic.com/23037260/c/2250/2250/348/0/il/590fd5/2862889975/il_300x300.2862889975_24lu.jpg`,
    imgName: "Wall Art"
},
{
    imgPath: `https://i.etsystatic.com/19220794/r/il/28ced3/2951466885/il_300x300.2951466885_1ly4.jpg`,
    imgName: "Kitchen & Dining"
}
]

function imgList() {
    for (let i = 0; i < imgCount.length; i++) {
        let imgLi = document.createElement("li");
        imgLi.classList.add("img-list");
        imgRowUl.appendChild(imgLi);

        const imgDiscover = document.createElement("img");
        imgDiscover.classList.add("img-small");
        imgLi.appendChild(imgDiscover);
        imgDiscover.src = `${imgCount[i].imgPath}`

        const discoverHeading = document.createElement("span");
        imgLi.appendChild(discoverHeading);
        discoverHeading.innerHTML = `${imgCount[i].imgName}`

    }


}
imgList();



let dealsEl = document.getElementById("deals-el");
let dealsSubDiv = document.createElement("div")
dealsEl.appendChild(dealsSubDiv)
dealsSubDiv.classList.add("deals-sub-div")

let dealsUl = document.createElement("ul");
dealsSubDiv.appendChild(dealsUl);
dealsUl.classList.add("dealsUl");


let dealsOfTheDay = [
    {
        img: `https://i.etsystatic.com/22368382/r/il/006d21/4245808662/il_300x300.4245808662_a3x4.jpg`,
        discount: "Up to 40% off on",
        names: "Women's Ethnic Clothing"
    },
    {
        img: `https://i.etsystatic.com/32501528/c/1488/1488/0/0/il/23a5b4/3700725057/il_300x300.3700725057_szgj.jpg`,
        discount: "Up to 40% off on",
        names: "Women's Western Clothing"
    },
    {
        img: `https://i.etsystatic.com/27399696/r/il/0c84a2/4160261159/il_300x300.4160261159_sxl6.jpg`,
        discount: "Up to 40% off on",
        names: "Men's Clothing"
    },
    {
        img: `https://i.etsystatic.com/12917913/r/il/7ef5de/4396673299/il_300x300.4396673299_bkgg.jpg`,
        discount: "Up to 40% off on",
        names: "Fashion Jewellery"
    },
    {
        img: `https://i.etsystatic.com/32501528/c/1757/1757/247/180/il/67dc01/4248212322/il_300x300.4248212322_psvv.jpg`,
        discount: "Up to 40% off on",
        names: "Winter Clothing"
    },
    {
        img: `https://i.etsystatic.com/23528878/r/il/625e23/2589827894/il_300x300.2589827894_bi5a.jpg`,
        discount: "Up to 40% off on",
        names: " Wedding Clothing"
    }
]

function dealsOfThedy() {
    for (let i = 0; i < dealsOfTheDay.length; i++) {
        const dealsList = document.createElement("li");
        dealsUl.appendChild(dealsList);

        const dealsImg = document.createElement("img");
        dealsList.appendChild(dealsImg);
        dealsImg.src = `${dealsOfTheDay[i].img}`

        const dealsDiscount = document.createElement("span");
        dealsList.appendChild(dealsDiscount);
        dealsDiscount.innerHTML = `${dealsOfTheDay[i].discount}`

        const dealsName = document.createElement("span");
        dealsList.appendChild(dealsName);
        dealsName.innerHTML = `${dealsOfTheDay[i].names}`
    }
}
dealsOfThedy();

let giftsEl = document.getElementById("gift-el");
let giftsUl = document.createElement("ul");

giftsUl.classList.add("gifts-card")
giftsEl.appendChild(giftsUl);

let gifts = [
    {
        img: `https://i.etsystatic.com/27890741/c/2343/1862/320/560/il/31a0dd/4028709894/il_340x270.4028709894_i6tr.jpg`,
        video: "https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/HFF_Hearts_Video_m6nj4t.mp4",
        starCount: 5,
        names: "Personalised Song Plaque With Stand, Any Photo / Song, Any Playlist, Photo and Music Gift, Music Prints",
        rates: "Assets/img/rate-icon.svg",
        halfRates: "Assets/img/halfRight-icon.svg",
        review: "(14,008))",
        price: "",
        actualPrice: 1435,
        discountPercentage: 50,
        option: ""
    },
    {
        img: `https://i.etsystatic.com/29096897/r/il/52a0f2/3574416678/il_340x270.3574416678_11ex.jpg`,
        video: `https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/IMG_1134_rlhkb1.mp4`,
        starCount: 4,
        names: " Birth Flower Jewelry Travel Case, Birth Month Flower Gift, Personalized Birthday Gift, Leather Jewelry Travel Case, Custom Jewelry Case",
        rates: "Assets/img/rate-icon.svg",
        halfRates: "Assets/img/halfRight-icon.svg",
        review: "(5,889)",
        price: 2127,
        actualPrice: "",
        discountPercentage: "",
        option: "FREE delivery"
    },
    {
        img: `https://i.etsystatic.com/35966576/c/1614/1283/669/351/il/e1510f/4033777789/il_340x270.4033777789_dqlw.jpg`,
        video: "",
        starCount: 5,
        names: "Faceless Portrait, custom illustration, personalised photo, photo illustration, personalised portrait, boyfriend gift, girlfriend gift",
        rates: "Assets/img/rate-icon.svg",
        halfRates: "Assets/img/halfRight-icon.svg",
        review: "(10,281)",
        price: "",
        actualPrice: 1521,
        discountPercentage: 50,
        option: ""
    },
    {
        img: `https://i.etsystatic.com/24512514/r/il/066b08/3699852893/il_340x270.3699852893_pkjb.jpg`,
        video: "",
        starCount: 5,
        names: "Dainty Name Necklace with Birth Flower, Personalized Name Necklace, Custom Gold Name Jewelry, Birthday Gift for Her, Bridesmaid Gift",
        rates: "Assets/img/rate-icon.svg",
        halfRates: "Assets/img/halfRight-icon.svg",
        review: "(14,357)",
        price: "",
        actualPrice: 3254,
        discountPercentage: 50,
        option: "FREE delivery"
    },
    {
        img: `https://i.etsystatic.com/32477306/c/2000/1589/0/256/il/0bcd64/3491080620/il_340x270.3491080620_oh18.jpg`,
        video: "",
        starCount: 5,
        names: " Heart Keychain Set - Made with Authentic LEGO® Bricks, Matching keychains, Gift Set for Couples, Best Friends - Very High Quality & DURABLE",
        rates: "Assets/img/rate-icon.svg",
        halfRates: "Assets/img/halfRight-icon.svg",
        review: "(7,665)",
        price: "",
        actualPrice: 1523,
        discountPercentage: 70,
        option: "FREE delivery"
    },
    {
        img: `https://i.etsystatic.com/26694795/c/2445/1943/282/0/il/035b01/3254592822/il_340x270.3254592822_5dss.jpg`,
        video: `https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/PB-42_convert-video-online.com_cfle3f.mp4`,
        starCount: 5,
        names: "Handmade Damascus Pocket Knife Rose Wood Handle Birthday Gift Folding Knife Groomsmen Gift Anniversary Wedding Personalized Gift for Men",
        rates: "Assets/img/rate-icon.svg",
        halfRates: "Assets/img/halfRight-icon.svg",
        review: "(6,836)",
        price: "",
        actualPrice: 7613,
        discountPercentage: 70,
        option: ""
    }
]



function giftUpdates() {
    for (let i = 0; i < gifts.length; i++) {

        let giftsList = document.createElement("li");
        giftsUl.appendChild(giftsList);
        let container = document.createElement("div");
        giftsList.appendChild(container);
        container.classList.add("img-container1");
        // let giftImg = document.createElement("img");
        // giftsList.appendChild(giftImg);
        // giftImg.src = gifts[i].img

        function playVideo() {

            if (gifts[i].video === "") {

                let giftImg = document.createElement("img");
                container.appendChild(giftImg);
                giftImg.src = gifts[i].img;


            } else {
                let plyVideo = document.createElement("video");
                container.appendChild(plyVideo);
                plyVideo.classList.add("video-el");
                plyVideo.src = gifts[i].video;
                plyVideo.poster = gifts[i].img;

                plyVideo.addEventListener("mouseover", function () {
                    plyVideo.play()
                    plyVideo.muted = "muted";

                    plyVideo.addEventListener("mouseleave", function () {
                        plyVideo.pause();
                        plyVideo.load();


                    });

                })
            }

            let gName = document.createElement("h3");
            giftsList.appendChild(gName);
            gName.innerHTML = gifts[i].names;

            if (gifts[i].starCount === 5) {
                for (let j = 0; j < 5; j++) {
                    let strCount = document.createElement("span");

                    giftsList.appendChild(strCount);

                    const gRates = document.createElement("img");
                    strCount.appendChild(gRates);
                    gRates.src = gifts[i].rates;

                }
            } else if (gifts[i].starCount === 4) {
                for (let k = 0; k < 4; k++) {
                    let hStrCount = document.createElement("span");
                    giftsList.appendChild(hStrCount);
                    hStrCount.classList.add("rates");
                    let imgRates = document.createElement("img");
                    hStrCount.appendChild(imgRates);
                    imgRates.src = gifts[i].rates;
                }
                let hRates = document.createElement("span");
                giftsList.appendChild(hRates);
                hRates.classList.add("hRates");
                let hImgRates = document.createElement("img");
                hRates.appendChild(hImgRates);
                hImgRates.src = gifts[i].halfRates;
            }

            const reView = document.createElement("span");
            giftsList.appendChild(reView);
            reView.innerHTML = gifts[i].review;


            function priceInfo() {
                if (gifts[i].price != "") {
                    const finalPrice = document.createElement("h4");
                    giftsList.appendChild(finalPrice);
                    finalPrice.innerHTML = ` ₹ ${gifts[i].price}`;
                }
                else {

                    let price = Math.floor(gifts[i].actualPrice * (gifts[i].discountPercentage / 100));
                    console.log(price)
                    const finalPrice = document.createElement("h4");
                    giftsList.appendChild(finalPrice);
                    finalPrice.innerHTML = ` ₹ ${price}`;
                }
            }
            priceInfo();


            if (gifts[i].actualPrice == "" || gifts[i].discountPercentage == "") {
                gifts[i].actualPrice = "";
                gifts[i].discountPercentage = ";"
            } else {

                
                
                const saveContainer = document.createElement("div");
                giftsList.appendChild(saveContainer);
                saveContainer.classList.add("price-both")
                
                const linePrice = document.createElement("h5");
                saveContainer.appendChild(linePrice);
                linePrice.innerHTML = ` ₹ ${gifts[i].actualPrice}`;
                
                
                const discountPrice = document.createElement("span");
                saveContainer.appendChild(discountPrice);
                discountPrice.classList.add("price-perc")
                discountPrice.innerHTML = `  (${gifts[i].discountPercentage}% off)`;
            
                const dOption = document.createElement("p");
                giftsList.appendChild(dOption);
                dOption.innerHTML = gifts[i].option;
            }


        }
        playVideo();
    }

}
giftUpdates();