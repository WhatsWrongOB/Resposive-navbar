const burger = document.querySelector('.hamburger');
const menuActive = document.querySelector('.menu');
burger.addEventListener("click",()=>{
     menuActive.classList.toggle("active")
});