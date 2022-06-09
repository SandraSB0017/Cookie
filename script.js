console.log('connecté');
const btnAccepter = document.querySelector('.btn-success');
console.log(btnAccepter);
const divCookies = document.querySelector('.cookies');
console.log(divCookies);

btnAccepter.addEventListener('click', function(){
    console.log("btn cliqué");
    divCookies.style.opacity = "0";
});