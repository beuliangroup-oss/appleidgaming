const hamburger =
document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    if (hamburger && menu) {
        hamburger.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }

});

const paymentBtn =
document.getElementById("paymentBtn");

const paymentMenu =
document.getElementById("paymentMenu");

paymentBtn.addEventListener("click", () => {

paymentMenu.classList.toggle("show");

});

document.querySelectorAll(".payment-item")
.forEach(item => {

item.addEventListener("click", () => {

paymentBtn.innerHTML =
item.textContent + " ▼";

paymentMenu.classList.remove("show");

});

});

document.addEventListener("click", (e) => {

if(
!paymentBtn.contains(e.target) &&
!paymentMenu.contains(e.target)
){
paymentMenu.classList.remove("show");
}

});
// Menu Mobile
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Popup Pembayaran
const filterBtn = document.querySelector(".filter-btn");
const paymentPopup = document.querySelector(".payment-popup");

filterBtn.addEventListener("click", () => {
    paymentPopup.classList.toggle("show");
});

// Klik luar popup = tutup
document.addEventListener("click", (e) => {
    if (
        !paymentPopup.contains(e.target) &&
        !filterBtn.contains(e.target)
    ) {
        paymentPopup.classList.remove("show");
    }
});
