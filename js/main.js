const elBurgerBtn = document.querySelector(".header__open-js");

elBurgerBtn.addEventListener("click" , ()=> {
    elBurgerBtn.closest(".header").classList.toggle("shownav")
})