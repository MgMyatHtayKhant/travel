const showcase = document.querySelector(".showcase");
const toggle = document.querySelector(".toggle");


toggle.addEventListener("click", () => {
    let active = "active";
    showcase.classList.toggle(active);
    toggle.classList.toggle(active);
});