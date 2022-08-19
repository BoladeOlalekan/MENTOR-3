const openBtn = document.querySelector(".open-menu-btn");
const closeBtn = document.querySelector(".close-menu-btn");
const nav = document.querySelector("nav");

openBtn.addEventListener('click' , () => {
    nav.classList.add('show-nav');
})

closeBtn.addEventListener('click' , () => {
    nav.classList.remove('show-nav');
    nav.classList.toggle('toggle-rotate')
})