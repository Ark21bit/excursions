let btn = document.querySelector(".btn-menu");
let menuBox = document.querySelector(".menu-box");
let body = document.querySelector("body");

btn.addEventListener("click", function(event){
    menuBox.classList.toggle("active");
    body.classList.toggle("overflow-hidden");
 });