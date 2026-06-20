const hamburger =
document.getElementById("hamburger");

const menu =
document.getElementById("menu");

hamburger.onclick = () => {
menu.classList.toggle("active");
};

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
