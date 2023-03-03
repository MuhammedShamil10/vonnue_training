let list = document.getElementById("list-el");
// let listUl = document.querySelector(".ul-el")


let listUl= document.createElement("ul")
listUl.classList.add("list-ul")
list.appendChild(listUl)

let lists = [
    {
        name:"Sellers sales Hub",
        img : ""
    },
    {
        name : "Jewellery & Accessories",
        img : "",
    },
    {
        name : "Clothing & Shoes",
        img : "",
    },
    {
        name : "Home & Living",
        img : "",
    },
    {
        name : "Wedding & Party",
        img : "",
    }, 
    {
        name : "Toys & Entertainment",
        img : "",
    },
    {
        name : "Art & Collectibles",
        img:"",
    },
    {
        name : "Craft Supplies",
        img:"",
    },
    {
        name : "Gifts",
        img: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 5 22 12" width="16" height="12" aria-hidden="true" focusable="false"><path d="M5,6A1,1,0,0,0,4,7v3H5v9a1,1,0,0,0,1,1h5V6H5Z"></path><path d="M19,6H13.007A4.245,4.245,0,0,0,14.97,3.744a1.614,1.614,0,0,0-2.65-1.375,1.757,1.757,0,0,0-.315.324,1.753,1.753,0,0,0-.315-0.324A1.615,1.615,0,0,0,9.042,3.746,4.257,4.257,0,0,0,11.006,6H13V20h5a1,1,0,0,0,1-1V10h1V7A1,1,0,0,0,19,6Z"></path></svg>` ,
    }
]   

function ListUlAdd () {
    for (let i = 0; i < lists.length; i++) {
        let newList = document.createElement("li");
        newList.classList.add("list-items");
        listUl.append(newList);
        if (lists[i].img === ""){
            newList.innerHTML =`${lists[i].name}`
        }else {
            newList.innerHTML =`${lists[i].img}${lists[i].name}`;
        }
    }
}

ListUlAdd();
