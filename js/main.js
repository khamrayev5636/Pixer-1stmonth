const elBurgerBtn = document.querySelector(".header__open-js");
const elBody = document.querySelector("body");

elBurgerBtn.addEventListener("click" , ()=> {
    elBurgerBtn.closest(".header").classList.toggle("shownav");
})

elBurgerBtn.addEventListener("click" , ()=> {
    elBody.classList.add("shownav-js")
});

elBurgerBtn.addEventListener("click" , ()=> {
    elBody.classList.remove("shownav-js")
});