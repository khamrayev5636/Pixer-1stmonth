const elBurgerBtn = document.querySelector(".header__open-js");
const elBody = document.querySelector("body");

elBurgerBtn.addEventListener("click" , ()=> {
    elBurgerBtn.closest(".header").classList.toggle("shownav");
    elBody.classList.toggle("body-js")
})


