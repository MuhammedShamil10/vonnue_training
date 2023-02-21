let myLeads = [];
let inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const tabBtn = document.getElementById("save-btn");

// const deleteBtn = document.getElementById("delete-btn")

// localStorage.clear()
const leadsFromLocalStorae = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorae)

if (leadsFromLocalStorae) {
    myLeads = leadsFromLocalStorae
    render(myLeads)
}

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })
})

document.getElementById("delete-btn").addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)

})

inputBtn.addEventListener("click", function () {
    inputEl.textContent = myLeads
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)

    console.log(localStorage.getItem("myLeads"))
})

function render(myLeads) {
    let listItem = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItem += `<li>
        <a target='_blank' href='${myLeads[i]}'> 
        ${myLeads[i]}</a>
        </li>`
    }
    ulEl.innerHTML = listItem;
}

// let myCourse = ["Learn CSS Animation", "UI desig yo", "Intro yo"];

// function myArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }
// myArr(myCourse);

// let myValue = localStorage.getItem("myValue");
// console.log(myValue);
let logBtn = document.getElementById("log-btn");

let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score : 41
    }
]

logBtn.addEventListener("click", function(){
    logBtn.textContent = data[0].score;
})

function generateSentance(desc, arr) {
    let baseStirng = `The ${arr.length} ${desc} are `;
    const lastIndex = arr.length - 1;
    for (let i = 0; i < arr.length; i ++) {
        if (i === lastIndex){
            baseStirng += arr[i];
        }else {
            baseStirng += arr[i]+ ", ";
        }
    }
    return baseStirng;
}
let sentance = generateSentance("Top anime charactors", ["Naruto","Monke D luffy","eren yeagher"]);
console.log(sentance);

let imgEl = document.getElementById("img-container");

const img = [
    
    "img/naruto.jpg",
    "img/luffy.jpg",
    "img/eren.jpg"
    
]

// const imgg="img/eren.jpg"
// imgtag.src=imgg;




function animeWorld() {
    for (let i = 0; i < img.length; i++) {
        
        const imgtag=document.createElement("img")
        imgtag.classList.add("suii")
        
        imgEl.appendChild(imgtag)
        // imgEl.innerHTML=`<img class="wanted"`


        let imgg=`<img class="wanted" src=${img[i]}>`
        imgtag.src=img[i];

        // imgEl.innerHTML += `<img class="wanted" src=${img[i]}>`
        
        
    }
    
}       
animeWorld();