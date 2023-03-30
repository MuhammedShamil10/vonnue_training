
const root  = document.querySelector('#products-el')
fetch("https://raw.githubusercontent.com/1hisham/traing-oct/main/sever-fipkart/totalAll.json")
.then(response => response.json())
.then (data => {
    console.log(data);


    update(data)


})


function update(items){
    let total =""
    items.forEach((item) => {
        console.log(item);
        let html =""
  
    html = `
    <div class="product-container">
    <div class="imgSection"><span><img src="${item.phoneImage}"></span></div><div class="mobImgSection"><span class="mobileImg"><img src="Assets/img/flipFav.svg"></span></div><div class="prodNameSection"><span class="productName">${item.phoneDiscription}</span></div><div class="rateAndOffer"><div class="ratingStar"><span class="productRating">4.7</span><img src="Assets/img/star.svg"></div><div class="offers"><span>22,308 Rating &amp; 880 Reviews</span></div></div><div class="priceSection"><span class="productPrice"></span><div>${item.price.price}<img class="assuredImg" src="Assets/img/azured.png"></div><span class="productAPrice">79900 </span><span class="productPercentage">9%</span></div></div>
    
    `
    total +=html

})
console.log(total);
root.innerHTML = total
}