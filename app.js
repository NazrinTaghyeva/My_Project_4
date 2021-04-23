const burger=document.querySelector(".header .nav-bar .nav-list .burger");
const mobileMenu=document.querySelector(".header .nav-bar .nav-list ul");
const header=document.querySelector(".header .container ");
burger.addEventListener("click",()=>{
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');

});
