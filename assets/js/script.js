const mobile = document.querySelector(".mobile");
const body = document.querySelector(".body");

AOS.init();

function Menu() {
    mobile.classList.toggle("active");
    body.classList.toggle("overflow");
}