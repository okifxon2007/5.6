let name = document.querySelector('.name');
let number = document.querySelector('.number');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
let cofirm = document.querySelector('.repassword');
let btn = document.querySelector('.sub');


let thname = document.querySelector('.thnm');
let thnum = document.querySelector('.thnum');
let them = document.querySelector('.them');
let thpas = document.querySelector('.thpas');
let threpass = document.querySelector('.threpass');

btn && btn.addEventListener('click', function(){
    thname.innerHTML = name.value;
    thnum.innerHTML = number.value;
    them.innerHTML = email.value;
    thpas.innerHTML = password.value;
    threpass.innerHTML = confirm.value;
})