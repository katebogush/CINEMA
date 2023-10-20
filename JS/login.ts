
interface User {
    phoneNumber: string,
    password: string,
    id: number,
    name: string
}

const users: Array <User> = [
    {
        phoneNumber: '380637712580',
        password: 'qqq',
        id: 1,
        name: 'Катя'
    },
    {
        phoneNumber: '380954730473',
        password: 'www',
        id: 2,
        name: 'Сережа'
    },
    {
        phoneNumber: '380123456789',
        password: 'eee' ,
        id: 3,
        name: 'Кіра'
    },
    {
        phoneNumber: '380987654321',
        password: 'rrr',
        id: 4,
        name: 'Крістіна'
    }
];

let loginForm = document.forms[0];
let userPhone:any= loginForm.elements[0];

let userPassword = document.querySelector(".inputPassword") as HTMLInputElement;
let enterUser = document.querySelector(".enterUserButton") as Element;
let incorectLoginPassword = document.querySelector(".incorectLoginPassword") as HTMLParagraphElement;
let loginUser = document.querySelector('.loginUser') as HTMLParagraphElement;
let userName = document.querySelector('.userName') as HTMLParagraphElement;
let loginPage:any = document.querySelector(".login");


let verifyUser = localStorage.getItem('userLogined')
if(verifyUser != null){
    loginUser.hidden = true;
    userName.hidden =  false;
    userName.innerHTML = verifyUser;
}

enterUser.addEventListener('click', enterUserAccount)
function enterUserAccount(){
  let loggetInUser = users.find(el => (el.phoneNumber === userPhone.value && el.password === userPassword.value) )
  if (loggetInUser === undefined){
    incorectLoginPassword.hidden = false
  }
  else {
        loginUser.hidden = true
        loginPage.style.display = 'none'
        userName.hidden =  false
        userName.innerHTML = loggetInUser.name;
        localStorage.setItem('userLogined', loggetInUser.name)
    }
}

let exitButton = document.querySelector('.exit');
let userAccount:any = document.querySelector('.myAccount');
exitButton?.addEventListener('click', exitUser)
function exitUser (){
    localStorage.removeItem('userLogined')
    loginUser.hidden = false;
    userName.hidden =  true;
    userAccount.style.display = 'none'
}




