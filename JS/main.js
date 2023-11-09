let listDay = document.querySelector(".list-day");
let dropdownList = document.querySelector(".dropdown-list")

listDay.addEventListener("click", toggleDroplist);

function toggleDroplist(){
    if (dropdownList.style.display === "block"){
        dropdownList.style.display = "none" 
       return
    }
    dropdownList.style.display = "block"
}

let listItem1 = document.querySelector(".list-item1");
let listItem2 = document.querySelector(".list-item2");
let conteinertoday = document.querySelector(".container-today")
let conteinerTomorrow = document.querySelector(".container-tomorrow")

listItem1.addEventListener("click", changeData1)
listItem2.addEventListener("click", changeData2)

function changeData1(){
    listDay.innerHTML = listItem1.innerHTML
    conteinerTomorrow.style.display = "none"
    conteinertoday.style.display = "block"
}
function changeData2(){
    listDay.innerHTML = listItem2.innerHTML
    conteinerTomorrow.style.display = "block"
    conteinertoday.style.display = "none"
}

let loginUserEnter = document.querySelector(".loginUser");
let login = document.querySelector(".login");
let header = document.querySelector("header")
loginUserEnter.addEventListener("click", showLoginForm)
function showLoginForm() {
    login.style.display = "flex";
}

let closeButton = document.querySelector(".closeLogin")
closeButton.addEventListener("click", closeLoginForm)
function closeLoginForm() {
    login.style.display = "none";
}

//выпадающее меню Юзера
let userNameCabinet = document.querySelector(".userName")
let myAccount = document.querySelector(".myAccount")

userNameCabinet.addEventListener("click", showUserCabinet)

function showUserCabinet(){
    if (myAccount.style.display === "block"){
        myAccount.style.display = "none" 
       return
    }
    myAccount.style.display = "block"
}










