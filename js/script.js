const btn = document.getElementById("menu-btn");
const btn2 = document.getElementById("menu-btn2");
const menu = document.getElementById("menu");
const menu2 = document.getElementById("menu2");

btn.addEventListener("click", navToggle);
btn2.addEventListener("click", navToggle2);

function navToggle() {
	btn.classList.toggle("open");
	menu.classList.toggle("flex");
	menu.classList.toggle("hidden");
}

function navToggle2() {
	btn2.classList.toggle("open");
	menu2.classList.toggle("flex");
	menu2.classList.toggle("hidden");
}
