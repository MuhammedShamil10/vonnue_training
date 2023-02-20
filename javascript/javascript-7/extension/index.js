let myLead = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")

let leadsFromStorage = localStorage.setItem("myLead", JSON.stringify(myLead));

if (leadsFromStorage) {
    myLead = leadsFromStorage;
    renderLeads()
}

inputBtn.addEventListener("click", function () {
    myLead.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLead", JSON.stringify(myLead));
    console.log(localStorage.getItem("myLead"));
    renderLeads();
})


function renderLeads() {
    let listItem = "";
    for (let i = 0; i < myLead.length; i++) {
        listItem += `
        <li>
        <a target='_blank' href='${myLead[i]}' >${myLead[i]}</a>
        </li>
        `
    }
    ulEl.innerHTML = listItem;
}
