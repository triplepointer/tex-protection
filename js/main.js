var burger = document.querySelector(".navbar__burger");
var menu = document.querySelector(".navbar__items--2");
var flag = 0;
burger.addEventListener('click', ()=> {
    if(flag === 0) {
        menu.classList.add("active");
        flag = 1;
    }
    else {
        menu.classList.remove("active");
        flag = 0;
    }

})