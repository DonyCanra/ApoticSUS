// Toogle class active
let navbar = document.querySelector(".navbar");
// ketika menu di klik
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
}

let searchForm = document.querySelector(".search-form");
// ketika menu di klik
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
}

let cartItem = document.querySelector(".cart-items-container");
// ketika menu di klik
document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
}

window.onscroll = () =>{
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
}
