let myLeads = [];
let inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const tabBtn = document.getElementById("save-btn");

// const deleteBtn = document.getElementById("delete-btn")

// localStorage.clear()
const leadsFromLocalStorae = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorae)

if(leadsFromLocalStorae){
    myLeads = leadsFromLocalStorae
    render(myLeads)
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        render(myLeads);
    })
})

document.getElementById("delete-btn").addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
    
})

inputBtn.addEventListener("click", function(){
    inputEl.textContent = myLeads
    myLeads.push(inputEl.value)
    inputEl.value =""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)

    console.log(localStorage.getItem("myLeads"))
})

function render(myLeads){
    let listItem =""
    for(let i=0;i<myLeads.length;i++){
        listItem += `<li>
        <a target='_blank' href='${myLeads[i]}'> 
        ${myLeads[i]}</a>
        </li>`
    }
    ulEl.innerHTML = listItem;
}



