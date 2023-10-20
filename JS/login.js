var users = [
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
        password: 'eee',
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
var loginForm = document.forms[0];
var userPhone = loginForm.elements[0];
var userPassword = document.querySelector(".inputPassword");
var enterUser = document.querySelector(".enterUserButton");
var incorectLoginPassword = document.querySelector(".incorectLoginPassword");
var loginUser = document.querySelector('.loginUser');
var userName = document.querySelector('.userName');
var loginPage = document.querySelector(".login");
var verifyUser = localStorage.getItem('userLogined');
if (verifyUser != null) {
    loginUser.hidden = true;
    userName.hidden = false;
    userName.innerHTML = verifyUser;
}
enterUser.addEventListener('click', enterUserAccount);
function enterUserAccount() {
    var loggetInUser = users.find(function (el) { return (el.phoneNumber === userPhone.value && el.password === userPassword.value); });
    if (loggetInUser === undefined) {
        incorectLoginPassword.hidden = false;
    }
    else {
        loginUser.hidden = true;
        loginPage.style.display = 'none';
        userName.hidden = false;
        userName.innerHTML = loggetInUser.name;
        localStorage.setItem('userLogined', loggetInUser.name);
    }
}
var exitButton = document.querySelector('.exit');
var userAccount = document.querySelector('.myAccount');
exitButton === null || exitButton === void 0 ? void 0 : exitButton.addEventListener('click', exitUser);
function exitUser() {
    localStorage.removeItem('userLogined');
    loginUser.hidden = false;
    userName.hidden = true;
    userAccount.style.display = 'none';
}
